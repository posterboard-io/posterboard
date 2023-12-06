"use client"

import { DashboardShell } from '~/components/pb/dashboard/dashboard-shell'
import { api } from "~/trpc/react"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import BubbleSelect from '~/components/pb/bubble-select'
import RolesDropDown from '~/components/pb/roles-dropdown'
import { Button } from '~/components/ui/button'
import Loading from '~/components/pb/utils/loading'
import RecommendedFeed from '~/components/pb/recommended-feed'
import LevelsDropDown from '~/components/pb/dropdown/level-dropdown'
import CitiesDropDown from '~/components/pb/dropdown/location-dropdown'
import CompanySizeDropDown from '~/components/pb/dropdown/company-size-dropdown'
import IndustryTypesDropDown from '~/components/pb/dropdown/industry-dropdown'
import CompensationDropDown from '~/components/pb/dropdown/compensation-dropdown'

export default function RecommendedJobs() {

    const userDidFinishOnboarding = api.onboarding.setUserOnboardingAsComplete.useMutation()

    const setUserAsNotComplete = api.onboarding.setUserOnboardingAsNotComplete.useMutation()

    const didUserCompleteOnboarding = api.onboarding.getOnboardingStatus.useQuery()

    const setUserAsComplete = () => {
        userDidFinishOnboarding.mutate()
        didUserCompleteOnboarding.refetch()
    }

    const allowUserChanges = () => {
        setUserAsNotComplete.mutate()
        didUserCompleteOnboarding.refetch()
    }

    if (didUserCompleteOnboarding.isLoading) {
      return <Loading />
    }

    if (didUserCompleteOnboarding.error) {
      return <div>Error loading onboarding status</div>
    }

    return (
      <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
          <div className="flex flex-col">
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">
                  Recommended Jobs                   
                </h1>
                {didUserCompleteOnboarding.data?.didCompleteOnboarding ? (
                  <Button
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white"
                    onClick={allowUserChanges}
                  >
                    Edit Preferences
                  </Button>
                ) : null}                
                </div>
              <div className="">
                  <Card className="">                    
                    <CardContent className="">
                      <div className="">
                        {didUserCompleteOnboarding.data?.didCompleteOnboarding ? (
                        <div>
                          <div className="py-2">
                            <RecommendedFeed />
                          </div>
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
                              <div className="flex flex-col items-center">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <p className="text-lg">
                                      Select the roles you&apos;re interested in
                                    </p>
                                    <RolesDropDown />
                                </div>
                                <div className="flex flex-row justify-between items-center w-full mt-4">
                                    <p className="text-lg">
                                      Select the levels you&apos;re interested in
                                    </p>
                                    <LevelsDropDown />
                                </div>
                                <div className="flex flex-row justify-between items-center w-full mt-4">
                                    <p className="text-lg">
                                      Select locations you&apos;re interested in
                                    </p>
                                    <CitiesDropDown />
                                </div>
                                <div className="flex flex-row justify-between items-center w-full mt-4">
                                    <p className="text-lg">
                                      Select the company size you&apos;re interested in
                                    </p>
                                    <CompanySizeDropDown />
                                </div>
                                <div className="flex flex-row justify-between items-center w-full mt-4">
                                    <p className="text-lg">
                                      Select the industries you&apos;re interested in
                                    </p>
                                    <IndustryTypesDropDown />
                                </div>
                                <div className="flex flex-row justify-between items-center w-full mt-4">
                                    <p className="text-lg">
                                      Select you&apos;re compensation ranges
                                    </p>
                                    <CompensationDropDown />
                                </div>
                              </div>
                            </CardContent>     
                            <hr className="" />
                            <CardContent>
                              <div className="flex flex-col justify-center items-center py-4">
                                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white" onClick={setUserAsComplete}>
                                  See Recommended Jobs
                                </Button>
                              </div>
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
