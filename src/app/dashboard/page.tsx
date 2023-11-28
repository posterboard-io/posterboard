"use client"

import { DashboardShell } from "~/components/pb/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import Link from "next/link"
import DashboardCard from "~/components/pb/dashboard-card"
import { DashboardGraph } from "~/components/pb/dashboard-graph"
import { DashboardPieChart, DashboardPieProps } from "~/components/pb/dashboard-piechart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { get } from "http"



export default function Dashboard() {

  const savedJobsCount = api.jobs.getSavedJobs.useQuery()

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
                  {/* Put some text here?  + Add in additional details below? */}
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
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Total Applications</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <div className="flex flex-col">
                          <Tabs defaultValue="YTD">
                            <TabsContent value="YTD">
                              <DashboardGraph />
                            </TabsContent>
                            <TabsContent value="All">
                              <DashboardGraph />
                            </TabsContent>
                            <div className="flex items-center justify-center">
                              <TabsList>
                                <TabsTrigger value="YTD">
                                  YTD
                                </TabsTrigger>
                                <TabsTrigger value="All">
                                  All Time
                                </TabsTrigger>
                              </TabsList>
                            </div>
                          </Tabs>
                        </div>
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
