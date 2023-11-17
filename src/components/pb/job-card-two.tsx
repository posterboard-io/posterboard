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

export default function JobCard({
    jobTitle,
    company,
    locationCity,
    locationState,
    locationCountry,
    jobTeam,
    salaryLow,
    salaryHigh,
    salaryRange,
    jobLink,
    jobImage,
    someDate
  }: {
    jobTitle: string,
    company: string,
    locationCity: string,
    locationState: string,
    locationCountry: string,
    jobTeam: string,
    salaryLow: string,
    salaryHigh: string,
    salaryRange: string,
    jobLink: string,
    jobImage: string,
    someDate: string
  }) {
    return (
      <Card>
        <CardHeader className="space-y-2 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl">{jobTitle}</CardTitle>
            <div className="flex flex-row items-center space-x-2">
              <Image
                className="h-6 w-auto"
                src={jobImage}
                alt={company}
                width={24}
                height={24}
                loading="lazy"
              />
              <CardTitle className="text-xl">
                {company}
              </CardTitle>
            </div>
            <CardDescription>{locationCity}, {locationState}, {locationCountry}</CardDescription>
            <CardDescription>{jobTeam}</CardDescription>
          </div>
          <div className="space-y-1">
            <Button variant="outline" className="flex items-center justify-center md:justify-start">
              <Calendar className="mr-2 h-4 w-4"/>
              Last Updated {someDate}
            </Button>
            <Button variant="outline" className="flex items-center justify-center md:justify-start">
              <DollarSign className="mr-2 h-4 w-4 text-green-500"/>
              ${salaryLow} - ${salaryHigh}, {salaryRange}
            </Button>
            <Button variant="outline" className="flex items-center justify-center md:justify-start">
              <Users className="mr-2 h-4 w-4"/>
              Interview Prep
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Button variant="outline" className="flex items-center justify-center">
            <TrendingUp className="mr-2 h-4 w-4 text-green-500"/>
            Popular
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            Tech Stack
            <CheckCircle className="ml-2 h-4 w-4 text-green-500"/>            
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Bookmark className="mr-2 h-4 w-4"/>            
            Save Application
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Link 
              href={jobLink} 
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </Button>
        </CardContent>
        <CardFooter>
          {/* If you have footer content, it goes here */}
        </CardFooter>
      </Card>
    );
  }
  