import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ArrowBigLeft, ArrowBigRight, ArrowRight, Book, Bookmark, Calendar, CheckCircle, DollarSign, Flame, TrendingUp, Users } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import Image from "next/image"
import Link from "next/link"

export default async function JobsCardTwo({ 
        jobTitle, company, locationCity, locationState, locationCountry, 
        jobTeam, salaryLow, salaryHigh, salaryRange, jobLink, jobImage
    }: { 
        jobTitle: string, company: string, locationCity: string, locationState: string, 
        locationCountry: string, jobTeam: string, salaryLow: string, salaryHigh: string, 
        salaryRange: string, jobLink: string, jobImage: string 
    }) {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-1">
                <CardTitle className="text-2xl">{jobTitle}</CardTitle>
                <div className="flex flex-row space-x-2">
                    <Image
                    className="h-6 w-4"
                    src={jobImage}
                    alt={company}
                    width={12}
                    height={24}
                    loading="lazy"
                    />
                    <CardTitle className="text-xl">
                    {company}
                    </CardTitle>
                </div>
                <CardDescription className="">{locationCity}, {locationState}, {locationCountry}</CardDescription>
                <CardDescription className="">{jobTeam}</CardDescription>
                </div>
                <div className="flex flex-col space-y-1">                
                    <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4 "/>
                        {/* {datePosted} */} Some date  
                    </Button>
                <Button variant="outline">
                <HoverCard>
                    <HoverCardTrigger>
                        <div className="flex flex-row space-x-2">
                        <DollarSign className="mr-2 h-4 w-4 text-green-500"/>
                        ${salaryLow} - ${salaryHigh}, {salaryRange}
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Unlock Salary Insights with Premium
                    </HoverCardContent>
                    </HoverCard>            
                </Button>
                <Button variant="outline">
                    <HoverCard>
                    <HoverCardTrigger>
                        <div className="flex flex-row space-x-2">
                        <Users className="mr-2 h-4 w-4"/>
                        Interview Prep
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Unlock Interview Prep with Premium 
                    </HoverCardContent>
                    </HoverCard>
                </Button>                      
                </div>
                </div>        
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-4 gap-6">
                <Button variant="outline">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500"/>
                    Popular
                </Button>
                <Button variant="outline">
                    Tech Stack
                    <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>            
                </Button>
                <Button variant="outline">            
                    <Bookmark className="mr-2 h-4 w-4"/>            
                    Save Job
                </Button>
                <Button variant="outline">
                    <Link 
                    href={jobLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View Job
                    </Link>
                    <ArrowRight className="mr-2 h-4 w-4"/>            
                </Button>
                </div>        
            </CardContent>
            <CardFooter>
                {/*  */}
            </CardFooter>
        </Card>
    )
}