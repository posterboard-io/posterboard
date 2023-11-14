"use client"

import { DashboardShell } from '~/components/pb/dashboard-shell'
import Link from 'next/link'
import { api } from "~/trpc/react"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import DashboardCard from "~/components/pb/dashboard-card"
import BubbleSelect from '~/components/pb/bubble-select'
import RolesAndGrowth from '~/components/pb/roles-growth'
import { Button } from '~/components/ui/button'

export default function RecommendedJobs() {

    // 

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
                {/*  */}
              <div className="">
                  <Card className="">                    
                    <CardContent className="">
                      <div className="">
                        {didUserCompleteOnboarding.data?.didCompleteOnboarding ? (
                          <div className="">
                            <p>You have completed onboarding </p>  
                            <p> Heres your reocommeneded feed</p>
                          </div>
                        ) : (
                          <div className="">
                            <CardHeader>
                              <CardTitle className="">
                                We can help you find jobs you'll love
                              </CardTitle>
                              <CardDescription>
                                Just tell us what you're looking for, and we'll curate a personalized list of jobs just for you
                              </CardDescription>
                            </CardHeader>
                            <hr className="" />
                            <CardHeader>
                              <CardTitle className="">
                                Select languages and frameworks
                              </CardTitle>
                            </CardHeader>
                            <CardContent>                              
                              <BubbleSelect />                                                              
                            </CardContent>     
                            <hr className="" />
                            <CardHeader>
                              <CardTitle className="">
                                Tell us about your career goals
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <RolesAndGrowth />
                            </CardContent>                         
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
