"use client"

import { api } from "~/trpc/react"
import JobCard from "~/components/pb/job-card"
import { useRouter, useSearchParams } from 'next/navigation'
import Loading from "~/components/pb/loading"
import { Button } from "~/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { ListBulletIcon } from "@radix-ui/react-icons"
import ComboboxDemo from "~/components/pb/combo-box"

export default async function NewestJobs() {

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
    
    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
        query: ""
      })
    
    const totalPages = totalJobs.data ? totalJobs.data / 10 : 1
      
    const roundedUpPages = Math.ceil(totalPages)

    return (
        <div className="flex flex-col py-4">
            <div className="flex flex-row justify-between items-center space-x-4 px-4 py-2">            
                <h1 className="text-xl font-semibold py-4 px-4">
                    Recently Posted Jobs - Showing page {page} of {roundedUpPages}
                </h1>
                <Popover>
                    <PopoverTrigger>
                        <Button variant="outline" className="bg-black dark:bg-white text-white dark:text-black">                            
                            Filter Results
                            <ListBulletIcon className="ml-2 h-4 w-4 text-white dark:text-black" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-col space-y-2 px-2 py-2">
                            <div className="flex justify-start">
                                <p className="text-lg font-semibold">Filters</p>
                            </div>
                            <hr className="border-gray-300 dark:border-gray-700" />
                            <div className="flex flex-col items-start space-y-2 px-4 py-2">
                                <p className="text-sm font-semibold">Tech Stack</p>
                                <ComboboxDemo />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>                
            </div>
            <div className="flex flex-col space-y-2 px-4">
                {latestJobs.isLoading ? (
                    <Loading />
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
                            jobLink={job.urlJob || ""}
                            jobImage={job.companyLogoUrl || ""}
                            someDate={job.updatedInDbAt ? new Date(job.updatedInDbAt).toLocaleDateString() : ""}
                            techStack={job.companyTechStack}
                            jobId={job.id}
                        />
                        ))}
                    </div>
                )}    
                {/* TODO: EVENTUALLY MAKE THIS A CONTINIUOS SCROLL ? */}
                {latestJobs.data && latestJobs.data.length > 0 && (
                <div className="flex justify-center py-4 px-4">
                    <Button 
                        className="bg-black dark:bg-white text-white dark:text-black"
                        onClick={handleNextPage}
                        disabled={latestJobs.isLoading}
                    >
                        Next page →
                    </Button>                    
                </div>
            )}
            </div>       
        </div>     
    )
}