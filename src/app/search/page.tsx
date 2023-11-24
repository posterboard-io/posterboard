"use client"

import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import JobCard from "~/components/pb/job-card"
import { 
    Card,
    CardTitle,
} from "~/components/ui/card"
import { Search } from "lucide-react"
import { api } from "~/trpc/react";
import { useState, useMemo, useEffect } from "react";
import Loading from "~/components/pb/utils/loading"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"
import { ListBulletIcon } from "@radix-ui/react-icons"
import ComboboxDemo from "~/components/pb/combo-box"
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchPage() {
    const [search, setSearch] = useState("");
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setSearch(e.target.value)
    }

    const savedJobs = api.jobs.getSavedJobs.useQuery();    
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    const searchParams = useSearchParams()
    const page = parseInt(searchParams?.get('page') ?? '1', 10);

    const router = useRouter()

    const jobs = api.jobs.searchJobs.useQuery({
        query: search,
        page: page,
    })

    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
        query: search
    })

    const handleNextPage = () => {        
        const nextPage = page + 1
        router.push(`/search?page=${nextPage}`)
    }

    const handlePreviousPage = () => {
        const previousPage = page - 1
        router.push(`/search?page=${previousPage}`)
    }

    const totalPages = totalJobs.data ? totalJobs.data / 10 : 1
      
    const roundedUpPages = Math.ceil(totalPages)

    return (
        <div className="min-h-screen"> 
            <div className="flex flex-col items-center justify-center space-y-2 py-2 px-2">
                <Card className="w-full py-2 px-2">
                    <CardTitle className="text-lg sm:text-base space-y-1 px-2 py-2">
                        Search Jobs
                    </CardTitle>                    
                    <div className="py-2">
                        <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 px-2">
                        <Input placeholder="Software Engineer" className="text-sm" onChange={handleSearch} />
                        <Button variant="outline" className="bg-black dark:bg-white text-white dark:text-black" onClick={
                            (e) => {
                                e.preventDefault()
                                jobs.refetch()
                            }                        
                        }>
                            <Search className="mr-2 h-4 w-4 text-white dark:text-black" />
                            Search
                        </Button>
                        </form>
                    </div>
                </Card>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4 px-4 py-2">            
                <div>
                    <h3 className="text-lg font-semibold">                    
                        Showing {jobs.data?.length} of {totalJobs.data} {search} Jobs
                    </h3>
                </div>                
                <div>
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
                                <p className="text-sm font-semibold">Location</p>
                                <ComboboxDemo />
                                <p className="text-sm font-semibold">Compensation</p>
                                <ComboboxDemo />
                                <p className="text-sm font-semibold">Level</p>
                                <ComboboxDemo />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>                
                </div>
            </div>
            {jobs.isLoading ? (
                <Loading />
            ) : jobs.error ? (
                <div>Error: {jobs.error.message}</div>
            ) : (
                <div className="flex flex-col space-y-2 px-2 py-2">
                    {jobs.data.map((job) => (
                        <JobCard 
                            key={job.id} 
                            jobTitle={job.title} 
                            company={job.company} 
                            locationCity={job.locationCity} 
                            locationState={job.locationState} 
                            locationCountry={job.locationCountry} 
                            jobTeam={job.internalTeam || ""} 
                            salaryLow={job.compensationLow || "Unknown"} 
                            salaryHigh={job.compensationHigh || "Unknown"} 
                            salaryRange={job.compensation || ""} 
                            jobLink={job.urlJob || ""}
                            jobImage={job.companyLogoUrl || ""}
                            someDate={job.updatedInDbAt ? new Date(job.updatedInDbAt).toLocaleDateString() : ""}
                            techStack={job.companyTechStack || "Unknown"}
                            jobId={job.id}
                            isSaved={allSavedJobIds!.includes(job.id)}
                        />
                    ))}
                </div>
            )}
            {jobs.data && jobs.data.length > 0 && (
                <div className="flex justify-center py-4 px-4">
                    <Button 
                        className="bg-black dark:bg-white text-white dark:text-black"
                        onClick={handleNextPage}
                        disabled={jobs.isLoading}
                    >
                        Next page →
                    </Button>
                    <Button 
                        className="bg-black dark:bg-white text-white dark:text-black"
                        onClick={handlePreviousPage}
                        disabled={jobs.isLoading}
                    >
                        ← Previous page
                    </Button>                
                </div>
            )}
        </div>
    );
}
