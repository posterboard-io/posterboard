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
    techStacksOptions, 
    currentLevels, 
    citySizes, 
    compensationRanges, 
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
import ErrorPage from "~/components/pb/utils/error-page"

export default function SearchPage() {
    const [search, setSearch] = useState("");
    const { toast } = useToast();
    const [openLevel, setOpenLevel] = useState(false);
    const [openTechStack, setOpenTechStack] = useState(false);
    const [openCitySize, setOpenCitySize] = useState(false);
    const [openCompensationRange, setOpenCompensationRange] = useState(false);
    const [openPageSize, setOpenPageSize] = useState(false);
    
    const [selectedLevel, setSelectedLevel] = useState<string[]>([]);
    const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
    const [selectedCitySize, setSelectedCitySize] = useState<string[]>([]);
    const [selectedCompensationRange, setSelectedCompensationRange] = useState<string[]>([]);
    const [selectedPageSize, setSelectedPageSize] = useState<string[]>([]);
    
    const selectedPageSizeLabels = selectedPageSize.map(value =>
        pageSizeOptions.find(level => level.value === value)?.label
    ).join(", ") || "Page size";

    const selectedPageSizeHandleSelect = (currentValue: string) => {
        setSelectedPageSize([currentValue]);
        console.log(currentValue);
    };

    const selectedCitySizeLabels = selectedCitySize.map(value =>
        citySizes.find(level => level.value === value)?.label
    ).join(", ") || "City";

    const selectedCitySizeHandleSelect = (currentValue: string) => {
        const newSelectedCitySize = selectedCitySize.includes(currentValue)
            ? selectedCitySize.filter(value => value !== currentValue)
            : [...selectedCitySize, currentValue];
        setSelectedCitySize(newSelectedCitySize);
        console.log(currentValue);
    }

    const selectedCompensationRangeLabels = selectedCompensationRange.map(value =>
        compensationRanges.find(level => level.value === value)?.label
    ).join(", ") || "Compensation";

    const selectedCompensationRangeHandleSelect = (currentValue: string) => {
        setSelectedCompensationRange([currentValue]);
        console.log(currentValue);
    }

    const selectedTechStackLabels = selectedTechStack.map(value =>
        techStacksOptions.find(stack => stack.value === value)?.label
    ).join(", ") || "Tech stack";

    const handleTechStackSelect = (currentValue: string) => {
        const newSelectedTechStack = selectedTechStack.includes(currentValue)
            ? selectedTechStack.filter(value => value !== currentValue)
            : [...selectedTechStack, currentValue];
        setSelectedTechStack(newSelectedTechStack);
        console.log(currentValue)
    }

    const selectedLevelLabels = selectedLevel.map(value =>
        currentLevels.find(level => level.value === value)?.label
    ).join(", ") || "Role level";

    const searchParams = useSearchParams()
    const page = parseInt(searchParams?.get('page') ?? '1', 10);

    const router = useRouter()

    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({
        query: search
    })

    const jobs = api.jobs.searchJobs.useQuery({
        page: page,
        pageSize: parseInt(selectedPageSize[0] || "50", 10),
        query: search,
        location: selectedCitySize[0] || "",
        techStack: selectedTechStack || [""],
        compensationRange: selectedCompensationRange[0] || "",
        roleLevel:  selectedLevel || null,
    })


    const handleSelect = (currentValue: string) => {
        const newSelectedLevels = selectedLevel.includes(currentValue)
            ? selectedLevel.filter(value => value !== currentValue)
            : [...selectedLevel, currentValue];
        setSelectedLevel(newSelectedLevels);
        console.log(currentValue)
    }

    const savedJobs = api.jobs.getSavedJobs.useQuery();    
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    const totalPages = totalJobs.data ? totalJobs.data / 50 : 1
      
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
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-2 py-2 justify-items-center">
                        {/* Page Size Component - works well enough */}
                        <Popover open={openPageSize} onOpenChange={setOpenPageSize}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openPageSize}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedPageSizeLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
                                <Command>
                                <CommandInput placeholder="Search page size..." />
                                <CommandEmpty>No page size found.</CommandEmpty>
                                <CommandGroup>
                                    {pageSizeOptions.map((size) => (
                                    <CommandItem
                                        key={size.value}
                                        value={size.value}
                                        onSelect={() => selectedPageSizeHandleSelect(size.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedPageSizeLabels.includes(size.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {size.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    
                    {/* Popover for Level - kinda broken ‼️ */}
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLevelLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
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
                                            selectedLevelLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {level.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* Sortable by tech stack that would be fire...?? */}
                    <Popover open={openTechStack} onOpenChange={setOpenTechStack}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedTechStackLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
                                <Command>
                                <CommandInput placeholder="Search Stacks..." />
                                <CommandEmpty>No stack found.</CommandEmpty>
                                <CommandGroup>
                                    {techStacksOptions.map((tech) => (
                                    <CommandItem
                                        key={tech.value}
                                        value={tech.value}
                                        onSelect={() => handleTechStackSelect(tech.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedTechStackLabels.includes(tech.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {tech.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* Compensation Ranges */}
                    <Popover open={openCompensationRange} onOpenChange={setOpenCompensationRange}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedCompensationRangeLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
                                <Command>
                                <CommandInput placeholder="Compensation..." />
                                <CommandEmpty>No range found.</CommandEmpty>
                                <CommandGroup>
                                    {compensationRanges.map((comp) => (
                                    <CommandItem
                                        key={comp.value}
                                        value={comp.value}
                                        onSelect={() => selectedCompensationRangeHandleSelect(comp.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedCompensationRangeLabels.includes(comp.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {comp.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* Popover for City Size - kinda broken ‼️  */}
                    <Popover open={openCitySize} onOpenChange={setOpenCitySize}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedCitySizeLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
                                <Command>
                                <CommandInput placeholder="Cities..." />
                                <CommandEmpty>No city found.</CommandEmpty>
                                <CommandGroup>
                                    {citySizes.map((city) => (
                                    <CommandItem
                                        key={city.value}
                                        value={city.value}
                                        onSelect={() => selectedCitySizeHandleSelect(city.value)}
                                    >
                                        <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedCitySizeLabels.includes(city.value) ? "opacity-100" : "opacity-0"
                                        )}
                                        />
                                        {city.label}
                                    </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* 
                    <Popover open={openLevel} onOpenChange={setOpenLevel}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openLevel}
                                    className="w-fit max-w-[300px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                {selectedLabels}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
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
                */}
                </CardContent>
            </Card>
            </div>
            <div className="flex flex-row justify-between items-center space-x-4 px-4 py-2">            
                <h3 className="text-lg font-semibold">                    
                    Showing {showingJobsTotal} of {totalJobs.data} {search} Jobs
                </h3>                
            </div>
            {jobs.isLoading ? (
                 <Loading />
             ) : jobs.error ? (
                 <ErrorPage />
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
                            externalId={job.externalJobId!}
                        />
                    ))}
                </div>
            )}
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
                        disabled={jobs.isLoading || jobs.data.length < 50 || page === roundedUpPages}
                    >
                        Next page →
                    </Button>
                </div>
            )}
        </div>
    );
}
