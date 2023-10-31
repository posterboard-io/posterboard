"use client"

import { api } from "~/trpc/react"
import JobCard from "~/components/pb/job-card"
import { useRouter, useSearchParams } from 'next/navigation'

export default function NewestJobs() {

    const searchParams = useSearchParams()
    const page = parseInt(searchParams?.get('page') ?? '1', 10);

    const latestJobs = api.jobs.getLatest.useQuery({        
        page: page,
        pageSize: 10,           
    })

    const router = useRouter()

    const handleNextPage = () => {        
        const nextPage = page + 1
        console.log(nextPage)
        router.push(`/newest?page=${nextPage}`)
    }

    return (
        <div className="flex flex-col py-4">
            <div className="flex justify-start items-start">
                <h1 className="text-xl font-semibold py-4 px-4">
                    Recently Posted Jobs
                </h1>
            </div>
            <div className="flex flex-col space-y-2 px-4">
                {latestJobs.isLoading ? (
                    <div>Loading...</div>
                ) : latestJobs.error ? (
                    <div>Error: {latestJobs.error.message}</div>
                ) : (
                    <div className="flex flex-col space-y-2">
                        {latestJobs.data.map((job) => (
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
                                jobLink={job.urlJob}
                                jobImage={job.companyLogoUrl || ""}
                            />
                        ))}
                    </div>
                )}    
                {latestJobs.data && latestJobs.data.length > 0 && (
                <div className="flex justify-center py-4">
                    <button 
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleNextPage}
                        disabled={latestJobs.isLoading}
                    >
                        Next page →
                    </button>
                </div>
            )}    
            </div>       
        </div>     
    )
}