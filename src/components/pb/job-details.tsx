"use client"
import Image from "next/image";
import { api } from "~/trpc/react";
import Loading from "~/components/pb/utils/loading"
import ErrorPage from "~/components/pb/utils/error-page"
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription
} from "~/components/ui/card"
import { Button } from "~/components/ui/button";

export default function JobDetails({ jobExternalId }: { jobExternalId: string }) {

  const jobSpecificDetails = api.jobs.getJobDetails.useQuery({
    jobId: jobExternalId
  })

  let techStackAsStr = jobSpecificDetails.data?.companyTechStack?.join(", ")

  if (techStackAsStr === undefined || techStackAsStr === null || techStackAsStr.length === 0) {
    techStackAsStr = "Unknown"
  }

  if (jobSpecificDetails.isLoading) {
    return <Loading />
  }

  if (jobSpecificDetails.error) {
    return <ErrorPage />
  }

  return (
    <main>
      <div className="flex flex-col h-screen-min">        
        {jobSpecificDetails.data ? (
        <div className="flex flex-col items-center justify-center py-4 px-4">
          <div className="w-full flex justify-start py-4 px-4">
            <Button
              variant="outline" 
              className="bg-black dark:bg-white text-white dark:text-black"
              onClick={
                (e) => {
                  e.preventDefault()
                  window.history.back();
                }
              }
            >
              Back to Search
            </Button>
          </div>
        <Card>
            <CardHeader>
              <div className="flex flex-col items-center justify-center py-4">
                <Image
                  src={jobSpecificDetails.data.companyLogoUrl!}
                  alt="Company Logo"
                  width={200}
                  height={200}
                  className="rounded-sm"
                />
              </div>
              <CardDescription>
                {jobSpecificDetails.data.company} - {jobSpecificDetails.data.location}
              </CardDescription>
              <CardTitle>
                {jobSpecificDetails.data.title}
              </CardTitle>              
              <hr className="py-1" />            
              <div className="grid grid-cols-4 gap-4">
              <Card className="py-4 px-4">
                <CardTitle className="lg:text-lg md:text-md sm:text-sm">
                  {jobSpecificDetails.data.compensation}
                </CardTitle>
              </Card>
              <Card className="py-4 px-4">
                <CardTitle className="lg:text-lg md:text-md sm:text-sm">
                  {jobSpecificDetails.data.roleLevel} Role
                </CardTitle>
              </Card>
              <Card className="py-4 px-4">
                <CardTitle className="lg:text-lg md:text-md sm:text-sm">
                  {jobSpecificDetails.data.internalTeam} Team
                </CardTitle>                
              </Card>
              <Card className="py-4 px-4">
                <CardTitle className="lg:text-lg md:text-md sm:text-sm">
                  {techStackAsStr} Stack
                </CardTitle>
              </Card>
              </div>
              <div className="flex flex-row items-center justify-center py-2">
                <Button
                  variant="outline" 
                  className="bg-black dark:bg-white text-white dark:text-black"
                  onClick={
                    (e) => {
                      e.preventDefault()
                      window.open(jobSpecificDetails.data?.urlJob!);
                    }
                  }
                >
                  View Role
                </Button>
              </div>
            </CardHeader>        
            <CardContent className="text-black dark:text-white">
              <div
                dangerouslySetInnerHTML={{ __html: jobSpecificDetails.data.jobDescription! }} 
                className="text-sm text-black dark:text-white"  
              />
            </CardContent>            
          </Card>
        </div>
        ): null}
      </div>
    </main>
  )
}
