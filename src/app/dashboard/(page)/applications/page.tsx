"use client"

import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import JobCard from "~/components/pb/jobcard/job-card"
import { Button } from "~/components/ui/button"
import React, { useState, useMemo, useEffect } from 'react'
import JobKanbanCard from "~/components/pb/jobcard/job-card-kanban"
import { useToast } from "~/components/ui/use-toast"
import { JobPostingStatus, StatusMap } from "~/types/types"


type ColumnsType = {
    [key in keyof typeof JobPostingStatus]: number[];
};

export default function DashboardApplications() {
    const [showAsKanban, setShowAsKanban] = useState(true);

    const { toast } = useToast();

    const updateJobStatus = api.jobs.updateJobStatus.useMutation({
        onSuccess: () => {
            toast({
                title: "Updated Status ✅",                
            });            
        },
        onError: (error) => {
            toast({
                title: "An error occurred 😢",
            });
        },
    });
    

    const savedJobs = api.jobs.getSavedJobs.useQuery();

    const toggleView = () => {        
        setShowAsKanban(!showAsKanban);
    };
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    const handleDragStart = (jobId: number) => (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', jobId.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (targetColumn: string) => (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const jobId = parseInt(e.dataTransfer.getData('text/plain'));
        moveJobToColumn(jobId, targetColumn);
    };

    
    const moveJobToColumn = (jobId: number, targetColumn: string) => {
        let newColumns = { ...columns };
    
        // Remove the jobId from all columns first
        for (const column in newColumns) {
            newColumns[column] = newColumns[column]!.filter(id => id !== jobId);
        }
    
        // Add jobId to the target column
        if (newColumns[targetColumn]) {
            newColumns[targetColumn]!.push(jobId);
        } else {
            console.error("Invalid target column:", targetColumn);
            return;
        }
    
        setColumns(newColumns);
    
        // Prepare the status to match the Prisma enum
        const statusMap: { [key: string]: "Saved" | "Applied" | "RecievedResponse" | "Interviewing" | "PendingOffer" | "Rejected" } = {
            Saved: "Saved",
            Applied: "Applied",
            ReceivedResponse: "RecievedResponse", // Check the spelling
            Interviewing: "Interviewing",
            PendingOffer: "PendingOffer",
            Rejected: "Rejected",
          };
    
        // Call the mutation to update the job status in the database
        const newStatus = statusMap[targetColumn];
        if (newStatus) {
            updateJobStatus.mutate({
                jobId: jobId,
                status: newStatus,
            });
        } else {
            console.error("Invalid column name:", targetColumn);
        }
    };
    

    
    const [columns, setColumns] = useState<{ [key: string]: number[] }>({
        Saved: [],
        Applied: [],
        ReceivedResponse: [],
        Interviewing: [],
        PendingOffer: [],
        Rejected: [],
    });    

    useEffect(() => {
        if (savedJobs.data) {
            const initialColumns: { [key: string]: number[] } = {
                Saved: [],
                Applied: [],
                ReceivedResponse: [],
                Interviewing: [],
                PendingOffer: [],
                Rejected: [],
            };
    
            savedJobs.data.forEach(job => {
                switch(job.jobPostingStatus) {
                    case JobPostingStatus.Saved:
                        initialColumns.Saved!.push(job.jobPostingId);
                        break;
                    case JobPostingStatus.Applied:
                        initialColumns.Applied!.push(job.jobPostingId);
                        break;
                    case JobPostingStatus.ReceivedResponse:
                        initialColumns.ReceivedResponse!.push(job.jobPostingId);
                        break;
                    case JobPostingStatus.Interviewing:
                        initialColumns.Interviewing!.push(job.jobPostingId);
                        break;
                    case JobPostingStatus.PendingOffer:
                        initialColumns.PendingOffer!.push(job.jobPostingId);
                        break;
                    case JobPostingStatus.Rejected:
                        initialColumns.Rejected!.push(job.jobPostingId);
                        break;
                    default:
                        // Handle default case or log an unexpected status
                }
            });
    
            setColumns(initialColumns);
        }
    }, [savedJobs.data]);
    

    if (savedJobs.isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex">
            <DashboardShell />
            <main className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium">Applications</h1>
                    <Button onClick={toggleView}  className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white">                            
                        {showAsKanban ? 'Show as List' : 'Show as Kanban'}
                    </Button>      
                </div>
                {showAsKanban ? ( 
                    <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="grid grid-cols-6 gap-4 p-4">
                        {/* Saved Column */}
                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('Saved')}>
                            <h2 className="font-bold text-xl mb-4">Saved ({columns.Saved!.length || 0})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.Saved!.map((jobId) => {          
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);                
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"}
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>

                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('Applied')}>
                            <h2 className="font-bold text-xl mb-4">Applied ({columns.Applied!.length  || 0})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.Applied!.map((jobId) => {                                    
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"} // Replace with actual date if available
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>

                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('ReceivedResponse')}>
                            <h2 className="font-bold text-xl mb-4">Recieved Response ({columns.ReceivedResponse?.length})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.ReceivedResponse?.map((jobId) => {                                    
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"} // Replace with actual date if available
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>

                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('Interviewing')}>
                            <h2 className="font-bold text-xl mb-4">Interviewing ({columns.Interviewing?.length || 0})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.Interviewing?.map((jobId) => {                                    
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"} // Replace with actual date if available
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>

                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('PendingOffer')}>
                            <h2 className="font-bold text-xl mb-4">Pending Offer ({columns.PendingOffer?.length || 0})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.PendingOffer?.map((jobId) => {                                    
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"} // Replace with actual date if available
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>
                        
                        <div className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop('Rejected')}>
                            <h2 className="font-bold text-xl mb-4">Rejected ({columns.Rejected?.length  || 0})</h2>                            
                            <div className="flex flex-col space-y-2">
                                {columns.Rejected?.map((jobId) => {                                    
                                    const job = savedJobs.data!.find(job => job.jobPostingId === jobId);
                                    return job ? (
                                        <JobKanbanCard 
                                            key={job.id}
                                            jobId={job.jobPostingId}
                                            jobLink={job.jobPosting.urlJob}
                                            jobTitle={job.jobPosting.title}
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity}
                                            locationState={job.jobPosting.locationState}
                                            locationCountry={job.jobPosting.locationCountry}
                                            jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                            someDate={"Unknown"} // Replace with actual date if available
                                            isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                            onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                        />
                                    ) : null;
                                })}
                            </div>
                        </div>
        
                        {/* Repeat for other columns */}
                        {/* {['applied', 'receivedResponse', 'interviewing', 'pendingOffer', 'rejected'].map(columnName => (
                            <div key={columnName} className="column flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4 min-h-[600px]" onDragOver={handleDragOver} onDrop={handleDrop(columnName)}>
                                <h2 className="font-bold text-xl mb-4">{columnName.charAt(0).toUpperCase() + columnName.slice(1).replace(/([A-Z])/g, ' $1')}</h2>
                                <div className="flex flex-col space-y-2">
                                    {columns[columnName]!.map((jobId) => {
                                        const job = savedJobs.data!.find(job => job.id === jobId);
                                        return job ? (
                                            <JobKanbanCard 
                                                key={job.id}
                                                jobId={job.jobPostingId}
                                                jobLink={job.jobPosting.urlJob}
                                                jobTitle={job.jobPosting.title}
                                                company={job.jobPosting.company} 
                                                locationCity={job.jobPosting.locationCity}
                                                locationState={job.jobPosting.locationState}
                                                locationCountry={job.jobPosting.locationCountry}
                                                jobTeam={job.jobPosting.internalTeam || "Unknown"}
                                                someDate={"Unknown"}
                                                isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                                onDragStart={(e: React.DragEvent) => handleDragStart(job.jobPostingId)(e as React.DragEvent<HTMLDivElement>)}
                                            />
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
                    

                ) : ( 
                    <div>
                    {savedJobs.isLoading ? (
                        <Loading />
                    ) : savedJobs.error ? (
                        <div>Error: {savedJobs.error.message}</div>
                    ) : savedJobs.data && savedJobs.data.length === 0 ? (
                        <div className="flex justify-center py-4">
                            <p>You have no saved Applications. Get Searching!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-2">
                            {savedJobs.data.map((job) => (
                                <JobCard
                                    key={job.id}
                                    jobTitle={job.jobPosting.title}
                                    company={job.jobPosting.company}
                                    locationCity={job.jobPosting.locationCity}
                                    locationState={job.jobPosting.locationState}
                                    locationCountry={job.jobPosting.locationCountry}
                                    jobTeam={job.jobPosting.internalTeam || ""}
                                    salaryLow={job.jobPosting.compensationLow || ""}
                                    salaryHigh={job.jobPosting.compensationHigh || ""}
                                    salaryRange={job.jobPosting.compensation || ""}
                                    jobLink={job.jobPosting.urlJob || ""}
                                    jobImage={job.jobPosting.companyLogoUrl || ""}
                                    someDate={job.jobPosting.updatedInDbAt ? new Date(job.jobPosting.updatedInDbAt).toLocaleDateString() : ""}
                                    techStack={job.jobPosting.companyTechStack}
                                    jobId={job.jobPostingId}
                                    isSaved={allSavedJobIds!.includes(job.jobPostingId)}
                                    externalId={job.jobPosting.externalJobId!}
                                />
                            ))}
                        </div>                        
                    )}
                </div>  
                )}
            </main>
        </div>
    );
}
