"use client"

import { DashboardShell } from '~/components/pb/dashboard-shell'
import Link from 'next/link'
import { api } from "~/trpc/react"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import DashboardCard from "~/components/pb/dashboard-card"
import BubbleSelect from '~/components/pb/bubble-select'
import RolesAndGrowth from '~/components/pb/roles-dropdown'
import { Button } from '~/components/ui/button'
import Loading from '~/components/pb/utils/loading'

export default function RecommendedFeed() {

    const userJobPrefrences = api.onboarding.getUserJobPrefrences.useQuery()

    console.log(userJobPrefrences.data)

    const recommendedFeed = api.jobs.getRecommended.useQuery({
        jobTitle: userJobPrefrences.data?.onboardingRoleType,
        jobLocation: userJobPrefrences.data?.onboardingLocation,
        jobTechStack: userJobPrefrences.data?.onboardingTechStack,
        jobCompany: userJobPrefrences.data?.onboardingCompanySize,
        jobSalary: userJobPrefrences.data?.onboardingTotalCompensation,
        jobLevel: userJobPrefrences.data?.onboardingLevel,
        jobIndustry: userJobPrefrences.data?.onboardingCompanyIndustry,
    })

    if (recommendedFeed.isLoading) {
      return <Loading />
    }

    console.log(recommendedFeed.data)

    return (
        <div>
            <h1>Recommended Jobs - This sucks but I know I can make it better</h1>
            <p>Job Preferences...</p>
            <p>{userJobPrefrences.data?.onboardingRoleType}</p>
            <p>{userJobPrefrences.data?.onboardingLocation}</p>
            <p>{userJobPrefrences.data?.onboardingTechStack}</p>
            <p>{userJobPrefrences.data?.onboardingCompanySize}</p>
            <p>{userJobPrefrences.data?.onboardingTotalCompensation}</p>
            <p>{userJobPrefrences.data?.onboardingLevel}</p>
            <hr />
            <p>Your Recommended Jobs...</p>
            {recommendedFeed.data?.map((job) => (
                <div key={job.id}>
                    <p>{job.title}</p>
                    <p>{job.location}</p>
                    <p>{job.company}</p>
                    <p>{job.companyTechStack}</p>
                    <p>{job.compensation}</p>
                    <p>{job.roleLevel}</p>                    
                </div>
            ))}
        </div>
    )
}