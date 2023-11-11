"use client"

import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import JobCard from "~/components/pb/job-card"
import { 
    Card,
    CardTitle,
    CardDescription,
} from "~/components/ui/card"
import { Filter, Search } from "lucide-react"
import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import Loading from "~/components/pb/loading"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"
import { ListBulletIcon } from "@radix-ui/react-icons"
import ComboboxDemo from "~/components/pb/combo-box"
  

export default function Jobs() {

    const [search, setSearch] = useState("");

    const jobs = api.jobs.searchJobs.useQuery({
        query: search
    })

    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
            query: search
    })

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

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
                        />
                    ))}
                </div>
            )}
        </div>
    );
}



/*

<div className="relative flex py-2 px-2">
                        <div className="relative flex justify-center text-xs ">
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-5 gap-6">                                                        
                                <Select>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="Company Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Public</SelectItem>
                                    <SelectItem value="dark">Private</SelectItem>
                                    <SelectItem value="system">Startup</SelectItem>
                                </SelectContent>
                                </Select>                            
                                <Select>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">San Fransisco, CA</SelectItem>
                                    <SelectItem value="system">New York, NY</SelectItem>
                                    <SelectItem value="dark">Remote</SelectItem>                                    
                                </SelectContent>
                                </Select>                            
                                <Select>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="Company Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">1-100</SelectItem>
                                    <SelectItem value="dark">100-1,000</SelectItem>
                                    <SelectItem value="system">1,000-10,000</SelectItem>
                                    <SelectItem value="system">10,000+</SelectItem>
                                </SelectContent>
                                </Select>                            
                                <Select>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="Tech" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">NextJS</SelectItem>
                                    <SelectItem value="dark">React</SelectItem>
                                    <SelectItem value="system">Django</SelectItem>
                                </SelectContent>
                                </Select>                            
                                <Select>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="Sort" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Newest</SelectItem>
                                    <SelectItem value="dark">Recommended</SelectItem>
                                    <SelectItem value="system">Compensation</SelectItem>
                                </SelectContent>
                                </Select>                                                        
                            </div>        
                        </CardContent>
                        </div>
                    </div>

*/