"use client"

import { DashboardShell } from '~/components/pb/dashboard-shell'
import Link from 'next/link'
import { api } from "~/trpc/react"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import DashboardCard from "~/components/pb/dashboard-card"

export default function RecommendedJobs() {

    const didUserCompleteOnboarding = api.onboarding.getOnboardingStatus.useQuery()

    return (
        <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
            <div className="flex flex-col">
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                      Recommended
                    </h1>                                      
                  </div>                  
                </div>
              <div className="flex flex-col">
                  <Card className="flex flex-col space-y-2">                    
                    <CardContent className="flex flex-col space-y-2">
                      <div className="grid grid-cols-4 gap-4">
                        {didUserCompleteOnboarding.data?.didCompleteOnboarding ? (
                          <div className="flex flex-col space-y-2 px-4">
                            <p>You have completed onboarding </p>  
                            <p> Heres your reocommeneded feed</p>
                          </div>
                        ) : (
                          <div className="flex flex-col py-4 px-4">
                            <p>You havent completed onboarding </p>
                            <p> Please complete onboarding to get your recommended feed</p>
                          </div>
                        )}
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
