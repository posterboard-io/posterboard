"use client"

import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import Link from "next/link"
import DashboardCard from "~/components/pb/dashboard/dashboard-card"
import { DashboardGraph, DashboardGraphProps } from "~/components/pb/dashboard/dashboard-graph"
import { DashboardPieChart, DashboardPieProps } from "~/components/pb/dashboard/dashboard-piechart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { get } from "http"



export default function Dashboard() {

  const savedJobsCount = api.jobs.getSavedJobs.useQuery()

  const statusOfSavedJobs = api.jobs.getStatusOfSavedJobs.useQuery()
  
  let dashboardGraphData: DashboardGraphProps[] = [];

  if (statusOfSavedJobs.data) {
    const userApplicationStatus = statusOfSavedJobs.data?.map(job => job.jobPostingStatus)
    const applicationStatusCount: { [status: string]: number } = {};

    console.log(userApplicationStatus)

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


  const userJobsAppliedSortedByMonth = savedJobsCount.data?.sort((a, b) => {
    return new Date(b.createdAt).getMonth() - new Date(a.createdAt).getMonth()
  })

  // console.log(`User applied to this many jobs this month: ${userJobsAppliedSortedByMonth?.length}`)

  const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
    query: ""
  })

  if (savedJobsCount.isLoading) {
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
