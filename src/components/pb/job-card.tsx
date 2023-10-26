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
import { ArrowBigLeft, ArrowBigRight, ArrowRightIcon, BookMarkedIcon, Calendar, CalendarIcon, CheckCircleIcon, DollarSignIcon, FlameIcon, TrendingUpIcon, User2Icon, Users2Icon } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"

import Link from "next/link"

export default function JobCard() {
    return (
      <Card>
      <CardHeader className="space-y-1">
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-1">
          <CardTitle className="text-2xl">Software Engineer L4</CardTitle>
          <div className="flex flex-row space-x-2">
            <GitHubLogoIcon className="h-6 w-6"/>
            <CardTitle className="text-xl">
              Github
            </CardTitle>
          </div>
          <CardDescription className="">San Fransisco, CA, USA</CardDescription>
          <CardDescription className="">Machine Learning</CardDescription>
          {/* <CardDescription className="">San Fransisco, CA, USA</CardDescription> */}
          </div>
          <div className="flex flex-col space-y-1">
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4 "/>
            Posted 13 days ago
          </Button>
          <Button variant="outline">
          <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row space-x-2">
                <DollarSignIcon className="mr-2 h-4 w-4 text-green-500"/>
                  $200,000 - $300,000
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
                  <Users2Icon className="mr-2 h-4 w-4"/>
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
            <TrendingUpIcon className="mr-2 h-4 w-4 text-green-500"/>
            Popular
          </Button>
          <Button variant="outline">
            Tech Stack
            <CheckCircleIcon className="ml-2 h-4 w-4 text-green-500"/>            
          </Button>
          <Button variant="outline">            
            <BookMarkedIcon className="mr-2 h-4 w-4"/>            
            Save Job
          </Button>
          <Button variant="outline">
            View Job
            <ArrowRightIcon className="mr-2 h-4 w-4"/>            
          </Button>
        </div>        
      </CardContent>
      <CardFooter>
        {/*  */}
      </CardFooter>
    </Card>
    )
}