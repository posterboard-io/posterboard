"use client"

import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import JobCard from "~/components/pb/jobcard/job-card"
import { 
    Card,
    CardContent,
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
import { 
    techStacks, 
    currentLevels, 
    citySizes, 
    roles, 
    companySizes, 
    compensationRanges, 
    industryTypes,
    pageSizeOptions,
} from "~/components/pb/tech-stacks"
import { useToast } from '~/components/ui/use-toast'
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "~/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command"
import { set } from "zod"
import ErrorPage from "~/components/pb/utils/error-page"

export default function SearchPage() {
    const [search, setSearch] = useState("");
    const { toast } = useToast();
    const [openLevel, setOpenLevel] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState<string[]>([]);

    const selectedLabels = selectedLevel.map(value =>
        currentLevels.find(level => level.value === value)?.label
    ).join(", ") || "Select levels...";

    const searchParams = useSearchParams()
    const page = parseInt(searchParams?.get('page') ?? '1', 10);

    const router = useRouter()

    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
        query: search
    })

    const jobs = api.jobs.searchJobs.useQuery({
        page: page,
        pageSize: 10,
        query: search,
        location: "CA",
        techStack: "React",
        compensationRange: "100000-200000",
        roleLevel:  selectedLevel || null,
    })

    console.log(selectedLevel)

    const handleSelect = (currentValue: string) => {
        const newSelectedLevels = selectedLevel.includes(currentValue)
            ? selectedLevel.filter(value => value !== currentValue)
            : [...selectedLevel, currentValue];
        setSelectedLevel(newSelectedLevels);
        console.log(currentValue)
    }

    const savedJobs = api.jobs.getSavedJobs.useQuery();    
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    const totalPages = totalJobs.data ? totalJobs.data / 10 : 1
      
    const roundedUpPages = Math.ceil(totalPages)

    const showingJobsTotal = jobs.data?.length! * page

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setSearch(e.target.value)
    }

    const handleNextPage = () => {        
        const nextPage = page + 1
        router.push(`/search?page=${nextPage}`)
    }

    const handlePreviousPage = () => {
        const previousPage = page - 1
        router.push(`/search?page=${previousPage}`)
    }    

    if (jobs.error) {
        toast({
            title: "An error occurred. We've been notified and are working on it!",
        })
        return (
            <ErrorPage />
        )        
    }

    if (jobs.isLoading || !jobs.data || !totalJobs.data || !savedJobs.data || !allSavedJobIds || !roundedUpPages) {
        return (
            <Loading />
        )
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
                        <Button variant="outline" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white" onClick={
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
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                        {/*  */}
                        <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Levels..." />
                                <CommandEmpty>No level found.</CommandEmpty>
                                <CommandGroup>
                                    {currentLevels.map((level) => (
                                    <CommandItem
                                        key={level.value}
                                        value={level.value}
                                        onSelect={() => handleSelect(level.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/*  */}
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Levels..." />
                                <CommandEmpty>No level found.</CommandEmpty>
                                <CommandGroup>
                                    {currentLevels.map((level) => (
                                    <CommandItem
                                        key={level.value}
                                        value={level.value}
                                        onSelect={() => handleSelect(level.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/*  */}
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Levels..." />
                                <CommandEmpty>No level found.</CommandEmpty>
                                <CommandGroup>
                                    {currentLevels.map((level) => (
                                    <CommandItem
                                        key={level.value}
                                        value={level.value}
                                        onSelect={() => handleSelect(level.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/*  */}
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Levels..." />
                                <CommandEmpty>No level found.</CommandEmpty>
                                <CommandGroup>
                                    {currentLevels.map((level) => (
                                    <CommandItem
                                        key={level.value}
                                        value={level.value}
                                        onSelect={() => handleSelect(level.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/*  */}
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Levels..." />
                                <CommandEmpty>No level found.</CommandEmpty>
                                <CommandGroup>
                                    {currentLevels.map((level) => (
                                    <CommandItem
                                        key={level.value}
                                        value={level.value}
                                        onSelect={() => handleSelect(level.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/*  */}
                </CardContent>
            </Card>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4 px-4 py-2">            
                <h3 className="text-lg font-semibold">                    
                    Showing {showingJobsTotal} of {totalJobs.data} {search} Jobs
                </h3>                
            </div>
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
                            externalId={job.externalJobId!}
                        />
                    ))}
                </div>
            {jobs.data && jobs.data.length > 0 && (
                <div className="flex justify-center py-4 px-4 gap-4">
                    <Button 
                        className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white px-4 py-2 rounded-md transition ease-in-out duration-150 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                        onClick={handlePreviousPage}
                        disabled={jobs.isLoading || page === 1}
                    >
                        ← Previous page
                    </Button>
                    <Button 
                        className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white px-4 py-2 rounded-md transition ease-in-out duration-150 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                        onClick={handleNextPage}
                        disabled={jobs.isLoading || jobs.data.length < 100 || page === roundedUpPages}
                    >
                        Next page →
                    </Button>
                </div>
            )}
        </div>
    );
}
