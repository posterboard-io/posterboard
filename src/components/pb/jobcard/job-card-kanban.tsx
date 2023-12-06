"use client"
"use client"

import { 
  ArrowRight, Calendar, 
  DollarSign, Terminal,
  FileText,
  ArrowUpRight
} from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import Image from "next/legacy/image"
import { Button } from "~/components/ui/button"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import Link from "next/link"
import SaveJobButton from "~/components/pb/jobcard/save-job-button";

export default function JobKanbanCard({ 
  jobTitle, company, locationCity, locationState, locationCountry, 
  jobTeam, jobLink, jobId, isSaved, onDragStart
  }: { 
  jobTitle: string, company: string, locationCity: string, 
  locationState: string, locationCountry: string, jobTeam: string,   
  jobLink: string, someDate: string, jobId: number, isSaved: boolean,
  onDragStart: (e: React.DragEvent) => void
 }) {
  
    return (
      <Card draggable="true" onDragStart={onDragStart}>
      <CardHeader className="space-y-1">
        <div className="grid grid-cols-1">
          <div className="flex flex-col space-y-1">
          <CardTitle className="text-md">{jobTitle}</CardTitle>  
            <CardDescription className="text-sm">{company}</CardDescription>
            <CardDescription className="text-sm">{locationCity}, {locationState}, {locationCountry}</CardDescription>
          </div>        
        </div>        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-2">          
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
            View
            
            </Link>            
            <ArrowUpRight className="ml-2 h-4 w-4 text-orange-500"/>
          </Button>
        </div>        
      </CardContent>
    </Card>
    )
}