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
  DollarSign, Terminal,
  FileText
} from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import Image from "next/legacy/image"
import Link from "next/link"
import SaveJobButton from "~/components/pb/jobcard/save-job-button";
import TechStackImage from "~/components/pb/tech-stack/tech-stack-image";

export default function JobCard({ 
  jobTitle, company, locationCity, locationState, locationCountry, 
  jobTeam, salaryLow, salaryHigh, salaryRange, jobLink, 
  jobImage, someDate, techStack = [], jobId, isSaved, externalId
  }: { 
  jobTitle: string, company: string, locationCity: string, 
  locationState: string, locationCountry: string, jobTeam: string, 
  salaryLow: string, salaryHigh: string, salaryRange: string, 
  jobLink: string, jobImage: string, someDate: string, techStack?: string[],
  jobId: number, isSaved: boolean, externalId: string }) {
    

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <CardTitle className="text-xl md:text-2xl">{jobTitle}</CardTitle>
          <div className="flex flex-row space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                className="object-contain"
                src={jobImage}
                alt={company}
                layout="fill"
                loading="lazy"
              />
              </div>
              <CardTitle className="text-lg md:text-xl">
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
                <p className="py-1 rounded text-sm">                  
                {salaryRange} from post
                </p>
              </HoverCardContent>
            </HoverCard>            
          </Button>                            
          </div>
        </div>        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4 text-orange-500"/>    
            <Link 
              href={`/search/details?jobExternalId=${externalId}`}
            >
              
              Details
            </Link>                     
          </Button>
          <Button variant="outline">            
            {techStack.map((tech, index) => (      
              <div key={index} className="grid">
                <TechStackImage techStack={tech} />
              </div>
            ))}
          </Button>
          <SaveJobButton
            jobId={jobId}
            isInitiallySaved={isSaved}
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
    </Card>
    )
}