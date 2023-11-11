"use client"

import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import JobCard from "~/components/pb/job-card"
import { 
    Card,
    CardTitle,
    CardDescription,
} from "~/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import { Search } from "lucide-react"
import { ScrollArea } from "~/components/ui/scroll-area"
import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import Loading from "~/components/pb/loading"

export default function Jobs() {

    const [search, setSearch] = useState("");

    const jobs = api.jobs.searchJobs.useQuery({
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
                    <CardDescription className="text-xs sm:text-sm px-2 py-2">
                        Search for jobs by company, location, technology, or job title
                    </CardDescription>
                    <div>
                        <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 px-2">
                        <Input placeholder="Software Engineer" className="text-sm" onChange={handleSearch} />
                        <Button variant="outline" className="bg-black dark:bg-white text-white dark:text-black">
                            <Search className="mr-2 h-4 w-4 text-white dark:text-black" />
                            Search
                        </Button>
                        </form>
                    </div>

                </Card>
            </div>
            <div className="flex flex-col space-y-2 px-2">
                <p>{search}</p>
            </div>
            {jobs.isLoading ? (
                <Loading />
            ) : jobs.error ? (
                <div>Error: {jobs.error.message}</div>
            ) : (
                <div className="flex flex-col space-y-2 px-2">
                    {jobs.data.map((job) => (
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