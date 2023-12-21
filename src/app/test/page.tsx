"use client"

import { api } from "~/trpc/react";
import Loading from "~/components/pb/utils/loading";
import JobKanbanCard from "~/components/pb/jobcard/job-card-kanban";
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader } from "~/components/ui/card";
import TechStackMappedSVG from "~/components/pb/tech-stack-svg";
import TechStackImage from "~/components/pb/tech-stack/tech-stack-image";


export default function TestPage() {
    return (
        // Apply the gradient to the entire viewport
        <div className="flex flex-col items-center justify-center min-h-screen"
             style={{ background: 'linear-gradient(to top, rgb(251, 146, 60), rgb(76, 142, 242))', height: '100vh' }}>                         
            
            <TechStackImage techStack="Python" />
            <TechStackImage techStack="typescript" />
            <TechStackImage techStack="javascript" />
        </div>
    )
}