"use client"

import { DashboardShell } from "~/components/pb/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/loading"
import JobCard from "~/components/pb/job-card"
import { Card } from "~/components/ui/card"
import Link from "next/link"

export default function Dashboard() {  

  const savedJobs = api.jobs.getSavedJobs.useQuery()

  console.log(savedJobs.data)

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
                  <div className="flex flex-col space-y-2 px-4">
                {savedJobs.isLoading ? (
                    <Loading />
                ) : savedJobs.error ? (
                    <div>Error: {savedJobs.error.message}</div>
                ) : (
                    <div className="flex flex-col space-y-2">
                        {savedJobs.data.map((job) => (
                            <JobCard 
                            key={job.id} 
                            jobTitle={job.jobPosting.title} 
                            company={job.jobPosting.company} 
                            locationCity={job.jobPosting.locationCity} 
                            locationState={job.jobPosting.locationState} 
                            locationCountry={job.jobPosting.locationCountry} 
                            jobTeam={job.jobPosting.internalTeam || ""} 
                            salaryLow={job.jobPosting.compensationLow || ""} 
                            salaryHigh={job.jobPosting.compensationHigh || ""} 
                            salaryRange={job.jobPosting.compensation || ""} 
                            jobLink={job.jobPosting.urlJob || ""}
                            jobImage={job.jobPosting.companyLogoUrl || ""}
                            someDate={job.jobPosting.updatedInDbAt ? new Date(job.jobPosting.updatedInDbAt).toLocaleDateString() : ""}
                            techStack={job.jobPosting.companyTechStack}
                            jobId={job.id}
                        />
                        ))}
                    </div>
                )}    
                {savedJobs.data && savedJobs.data.length > 0 && (
                <div className="flex justify-center py-4">
                    <p>You have no saved Jobs. Get Searching!</p>
                </div>
            )}    
            </div>   
                </div>                              
              </div>                                  
            </div>                
        </main>
      </div>
  )
}