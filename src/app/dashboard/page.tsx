"use client"

import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import Link from "next/link"
import DashboardCard from "~/components/pb/dashboard/dashboard-card"
import { DashboardGraph, DashboardGraphProps } from "~/components/pb/dashboard/dashboard-graph"
import { DashboardPieChart, DashboardPieProps } from "~/components/pb/dashboard/dashboard-piechart"
import { StatsPieChart } from "~/components/pb/market-pie-chart"
import TreeMapDashboard from "~/components/pb/dashboard/dashboard-treemap"

interface TechStackItem {
  _count: {
    companyTechStack: number;
  };
  companyTechStack: string[];
}

export interface TechCount {
  name: string;
  value: number;
}


export default function Dashboard() {

  const savedJobsCount = api.jobs.getSavedJobs.useQuery()

  const statusOfSavedJobs = api.jobs.getStatusOfSavedJobs.useQuery()
  
  let dashboardGraphData: DashboardGraphProps[] = [];

  if (statusOfSavedJobs.data) {
    const userApplicationStatus = statusOfSavedJobs.data?.map(job => job.jobPostingStatus)
    const applicationStatusCount: { [status: string]: number } = {};

    userApplicationStatus.forEach(status => {
      if (applicationStatusCount[status!]) {
        applicationStatusCount[status!] += 1;
      } else {
        applicationStatusCount[status!] = 1;
      }
    });

    dashboardGraphData = [
      { name: "Saved", total: applicationStatusCount["Saved"] || 0 },
      { name: "Applied", total: applicationStatusCount["Applied"] || 0 },
      { name: "Response", total: applicationStatusCount["RecievedResponse"] || 0 },
      { name: "Interviewing", total: applicationStatusCount["Interviewing"] || 0 },
      { name: "Pending", total: applicationStatusCount["PendingOffer"] || 0 },
      { name: "Rejected", total: applicationStatusCount["Rejected"] || 0 },
    ];
  }

  const jobCount = savedJobsCount.data?.length

  const companiesAppliedTo = savedJobsCount.data?.map(job => job.jobPosting.company)

  const applicaationsByCompany = companiesAppliedTo?.reduce((acc: any, company: any) => {
    if (acc[company]) {
      acc[company] += 1;
    } else {
      acc[company] = 1;
    }
    return acc;
  }
    , {})

  let dashboardPieData: DashboardPieProps[] = [];

  if (applicaationsByCompany) {
    dashboardPieData = Object.entries(applicaationsByCompany).map(([name, total]) => ({
      name,
      total: typeof total === 'number' ? total : 0  // Ensuring total is a number
    }));
  }

  const userJobPrefrences = api.onboarding.getUserJobPrefrences.useQuery();

  const recommendedFeed = api.jobs.getRecommended.useQuery({
    jobTitle: userJobPrefrences.data?.onboardingRoleType || [],
  });


  const techStackQueryResult = api.jobs.getJobStatsTechStack.useQuery({ })

  let sortedTechCounts: TechCount[] = [];

  if (techStackQueryResult.data) {
      const techStackData: TechStackItem[] = techStackQueryResult.data;    

      const countTechOccurrences = (data: TechStackItem[], techNames: string[]): TechCount[] => {
      // Explicitly define the type of counts
      const counts: Record<string, number> = techNames.reduce((acc, tech) => ({ ...acc, [tech]: 0 }), {});
      
      data.forEach(item => {
          techNames.forEach(tech => {
          if (item.companyTechStack.includes(tech)) {
              counts[tech] += 1;
          }
          });
      });
      
      // Using type assertion to assure TypeScript that 'value' will always be a number
      return Object.keys(counts).map(key => ({ name: key, value: counts[key] as number })).sort((a, b) => (b.value as number) - (a.value as number));
      };
      
      sortedTechCounts = countTechOccurrences(techStackData, [
          "Java", "Python", "C++", "Rust", "Go", "JavaScript", "TypeScript", "SQL", "C#", "Swift"
      ]);            
  }

  const totalJobsSortedByRoleLevel = api.jobs.getAllJobsSortedByRoleLevel.useQuery()

  // const countRoleTypeAtCompany = (data: any[], roleTypes: string[]): TechCount[] => {
  //   const counts: Record<string, number> = roleTypes.reduce((acc, role) => ({ ...acc, [role]: 0 }), {});
    
  //   data.forEach(item => {
  //     roleTypes.forEach(role => {
  //       if (item.jobPosting.companyRoleType.includes(role)) {
  //         counts[role] += 1;
  //       }
  //     });
  //   });
    
  //   return Object.keys(counts).map(key => ({ name: key, value: counts[key] as number })).sort((a, b) => (b.value as number) - (a.value as number));
  // }

  const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
    query: ""
  })

  if (savedJobsCount.isLoading || statusOfSavedJobs.isLoading || userJobPrefrences.isLoading || recommendedFeed.isLoading || techStackQueryResult.isLoading || totalJobsSortedByRoleLevel.isLoading || totalJobs.isLoading) {
    return <Loading />
  }

  return (
    <div className="flex">
      <DashboardShell />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Dashboard
                </h1>
              </div>
            </div>
            <div className="flex flex-col">
              <Card className="flex flex-col space-y-2">
                <CardTitle className="flex flex-col py-2 px-2">
                </CardTitle>
                <CardContent className="flex flex-col space-y-2">
                  <div className="grid grid-cols-4 gap-4">
                    <Link href="">
                      <DashboardCard
                        cardContent={jobCount?.toString() || "0"}
                        cardContentDesc="Nice work!"
                        cardTitle="Total Jobs Applied For"
                        cardIcon="JobIcon"
                      />
                    </Link>
                    <Link href="">
                      <DashboardCard
                        cardContent={dashboardPieData.length.toString() || "0"}
                        cardContentDesc="Keep it up!"
                        cardTitle="Companies Applied"
                        cardIcon="JobIcon"
                      />
                    </Link>
                    <Link href="/dashboard/recommended">
                      <DashboardCard
                        cardContent={recommendedFeed.data?.length.toString() || "0"}
                        cardContentDesc="New jobs for you!"
                        cardTitle="Recommendations"
                        cardIcon="JobIcon"
                      />
                    </Link>
                    <Link href="/newest">
                      <DashboardCard
                        cardContent={totalJobs?.data?.toString() || "0"}
                        cardContentDesc="Check back for new jobs!"
                        cardTitle="Total Posted"
                        cardIcon="JobIcon"
                      />
                    </Link>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                    <Card className="col-span-4 flex-grow">
                      <CardHeader>
                        <CardTitle>Application Status</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <DashboardGraph 
                          DashboardGraphData={dashboardGraphData!}
                        />
                      </CardContent>
                    </Card>
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Company Applications</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <DashboardPieChart DashboardPieData={dashboardPieData} />
                      </CardContent>
                    </Card>
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>
                          Tech Stack Breakdown
                        </CardTitle>
                      </CardHeader>                      
                      <CardContent className="pl-2">
                          <StatsPieChart data={sortedTechCounts} />
                      </CardContent>
                    </Card>
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>
                          Company Open Positions
                        </CardTitle>
                      </CardHeader>                      
                      <CardContent className="pl-2">
                          <TreeMapDashboard />
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
