"use client"

import { api } from "~/trpc/react"
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "~/components/ui/card"
import DashboardCard from "~/components/pb/dashboard-card"
import BubbleSelect from '~/components/pb/bubble-select'
import RolesAndGrowth from '~/components/pb/roles-dropdown'
import { Button } from '~/components/ui/button'
import { useMemo } from 'react'
import Loading from '~/components/pb/utils/loading'
import JobCard from '~/components/pb/job-card'

export default function RecommendedFeed() {

    const userJobPrefrences = api.onboarding.getUserJobPrefrences.useQuery();

    const recommendedFeed = api.jobs.getRecommended.useQuery({
        jobTitle: userJobPrefrences.data?.onboardingRoleType || [],
    });
    
    console.log(recommendedFeed.data);

    if (recommendedFeed.isLoading) {
        console.log('Loading recommended jobs...');
      } else {
        console.log('Recommended Jobs:', recommendedFeed.data);
      }
      console.log('Job Titles:', userJobPrefrences.data?.onboardingRoleType);

      
    
    const savedJobs = api.jobs.getSavedJobs.useQuery();
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    if (recommendedFeed.isLoading) {
      return <Loading />
    }

    if (recommendedFeed.error) {
      return <div>{recommendedFeed.error.message}</div>
    }

    if (recommendedFeed.data?.length === 0) {
      return <div>no data :/</div>
    }

    if (!recommendedFeed.data) {
        return <div>no data</div>
    }

    return (
        <div className="flex flex-col space-y-2">
            {recommendedFeed.data?.map((job) => (
                <JobCard 
                    key={job.id} 
                    jobTitle={job.title} 
                    company={job.company} 
                    locationCity={job.locationCity} 
                    locationState={job.locationState} 
                    locationCountry={job.locationCountry} 
                    jobTeam={job.internalTeam || ""} 
                    salaryLow={job.compensationLow || ""} 
                    salaryHigh={job.compensationHigh || ""} 
                    salaryRange={job.compensation || ""} 
                    jobLink={job.urlJob || ""}
                    jobImage={job.companyLogoUrl || ""}
                    someDate={job.updatedInDbAt ? new Date(job.updatedInDbAt).toLocaleDateString() : ""}
                    techStack={job.companyTechStack}
                    jobId={job.id}
                    isSaved={allSavedJobIds!.includes(job.id)}
                />
            ))}
        </div>
    )
}