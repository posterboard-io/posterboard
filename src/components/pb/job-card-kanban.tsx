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
  ArrowRight, Bookmark,
  Calendar, CheckCircle, 
  DollarSign, Flame, TrendingUp, Users } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import Image from "next/image"
import Link from "next/link"
import SaveJobButton from "~/components/pb/save-job-button";

export default function JobKanbanCard({ 
  jobTitle, company, locationCity, locationState, locationCountry, 
  jobTeam, jobLink, jobId
  }: { 
  jobTitle: string, company: string, locationCity: string, 
  locationState: string, locationCountry: string, jobTeam: string,   
  jobLink: string, someDate: string, jobId: number }) {

    return (
      <Card>
      <CardHeader className="space-y-1">
        <div className="grid grid-cols-1">
          <div className="flex flex-col space-y-1">
          <CardTitle className="text-2xl">{jobTitle}</CardTitle>
          <CardDescription className="">{company}, {jobTeam}</CardDescription>        
          <CardDescription className="">{locationCity}, {locationState}, {locationCountry}</CardDescription>        
          </div>        
        </div>        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">          
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
            <ArrowRight className="mr-2 h-4 w-4"/>            
          </Button>
        </div>        
      </CardContent>
    </Card>
    )
}