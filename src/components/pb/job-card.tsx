"use client"

import { Button } from "~/components/ui/button"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { 
  ArrowRight, Calendar, 
  DollarSign, Terminal 
} from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import Image from "next/image"
import Link from "next/link"
import SaveJobButton from "~/components/pb/save-job-button";

export default function JobCard({ 
  jobTitle, company, locationCity, locationState, locationCountry, 
  jobTeam, salaryLow, salaryHigh, salaryRange, jobLink, 
  jobImage, someDate, techStack = [], jobId
  }: { 
  jobTitle: string, company: string, locationCity: string, 
  locationState: string, locationCountry: string, jobTeam: string, 
  salaryLow: string, salaryHigh: string, salaryRange: string, 
  jobLink: string, jobImage: string, someDate: string, techStack?: string[],
  jobId: number }) {

    if (techStack.length === 0) {
      techStack = ["Unknown"]
    }

    if (salaryLow.length === 0) {
      salaryLow = "Unknown"
    }

    if (salaryHigh.length === 0) {
      salaryHigh = "Unknown"
    }

    if (salaryRange.length === 0) {
      salaryRange = "Unknown"
    }

    return (
      <Card>
      <CardHeader className="space-y-1">
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-1">
          <CardTitle className="text-2xl">{jobTitle}</CardTitle>
          <div className="flex flex-row space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                className="object-contain" // or use object-contain for the full image
                src={jobImage}
                alt={company}
                layout="fill"
                loading="lazy"
              />
              </div>

            <CardTitle className="text-xl">
              {company}
            </CardTitle>
          </div>
          <CardDescription className="">{locationCity}, {locationState}, {locationCountry}</CardDescription>
          <CardDescription className="">{jobTeam}</CardDescription>
          </div>
          <div className="flex flex-col space-y-1">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4 text-orange-500"/>
              Last Updated {someDate}
          </Button>
          <Button variant="outline">
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row space-x-2">
                <DollarSign className="mr-2 h-4 w-4 text-orange-500"/>
                  {salaryLow} - {salaryHigh} 
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                {salaryRange} from description
              </HoverCardContent>
            </HoverCard>            
          </Button>                            
          </div>
        </div>        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-6">          
          <Button variant="outline">
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row space-x-2">
                  <Terminal className="mr-2 h-4 w-4 text-orange-500"/>
                  Tech Stack
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="grid grid-cols-2 gap-2">                  
                {techStack.map((tech, index) => (                  
                  <p key={index} className="py-1 rounded text-sm">
                    {tech}
                  </p>
                ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          </Button> 
          <SaveJobButton
            jobId={jobId}
          />
          <Button variant="outline">
            <Link 
              href={jobLink} 
              target="_blank"
              rel="noopener noreferrer"
            >
            View Job
            </Link>
            <ArrowRight className="ml-2 h-4 w-4 text-orange-500"/>            
          </Button>
        </div>        
      </CardContent>
      <CardFooter>
        {/*  */}
      </CardFooter>
    </Card>
    )
}