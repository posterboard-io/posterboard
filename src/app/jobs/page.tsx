import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import JobCard from "~/components/pb/job-card"
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent

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


export default function Jobs() {
    return (
        <div className="min-h-screen">                                
            <div className="flex flex-col items-center justify-center space-y-2 py-2 px-2">
                <Card className="py-2 px-2">                    
                    <CardTitle className="space-y-1 px-2 py-2">
                        Find Jobs
                    </CardTitle>
                    <CardDescription className="px-2 py-2">
                        Search for jobs by company, location, technology, or job title
                    </CardDescription>
                    <div className="flex flex-row space-x-2 px-2">
                        <Input placeholder="Software Engineer" />
                        <Button variant="outline" className="bg-black dark:bg-white text-white dark:text-black">
                            <Search className="mr-2 h-4 w-4 text-white dark:text-black" />
                            Search
                        </Button>
                        
                    </div>
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
                </Card>
                {/* <Input placeholder="Search for jobs" /> */}
                <ScrollArea className="">
                    <div className="flex flex-col space-y-2">
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
                </ScrollArea>
            </div>
            {/* <CreateAccountCard /> */}
        </div>
    )
}