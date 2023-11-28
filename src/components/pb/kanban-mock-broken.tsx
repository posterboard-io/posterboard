"use client"

import { DashboardShell } from "~/components/pb/dashboard-shell"
import { Button } from "~/components/ui/button"
import { getServerAuthSession } from "~/server/auth"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import JobCard from "~/components/pb/job-card"
import JobKanbanCard from "~/components/pb/job-card-kanban"
import React, { useState, useMemo } from 'react'


export default function DashboardApplications() {
    const [showAsKanban, setShowAsKanban] = useState(true);
    const savedJobs = api.jobs.getSavedJobs.useQuery();    
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    const toggleView = () => {
        setShowAsKanban(!showAsKanban);
    };

    return (
        <div className="flex">
            <DashboardShell />
            <main className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium">Applications</h1>
                    <Button onClick={toggleView}  className="bg-black dark:bg-white text-white dark:text-black">                            
                        {showAsKanban ? 'Show as List' : 'Show as Kanban'}
                    </Button>                                    
                </div>
                {showAsKanban ? (
                    <div className="grid grid-cols-5 gap-4 p-4">
                        {/* Saved Column */}
                        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
                            <h2 className="font-bold text-xl mb-4">Saved</h2>
                            {savedJobs.isLoading ? (
                                <Loading />
                            ) : savedJobs.error ? (
                                <div>Error: {savedJobs.error.message}</div>
                            ) : (
                                <div className="flex flex-col space-y-2">
                                    {savedJobs.data.map((job) => (
                                        <JobKanbanCard 
                                            key={job.id} 
                                            jobTitle={job.jobPosting.title} 
                                            company={job.jobPosting.company} 
                                            locationCity={job.jobPosting.locationCity} 
                                            locationState={job.jobPosting.locationState} 
                                            locationCountry={job.jobPosting.locationCountry} 
                                            jobTeam={job.jobPosting.internalTeam || ""}                                 
                                            jobLink={job.jobPosting.urlJob || ""}
                                            someDate={job.jobPosting.updatedInDbAt ? new Date(job.jobPosting.updatedInDbAt).toLocaleDateString() : ""}
                                            jobId={job.id}
                                            isSaved={allSavedJobIds!.includes(job.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Applied Column */}
                        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
                            <h2 className="font-bold text-xl mb-4">Applied</h2>
                            {/* Other job cards would go here */}
                        </div>

                        {/* Received Response Column */}
                        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
                            <h2 className="font-bold text-xl mb-4">Received Response</h2>
                            {/* Other job cards would go here */}
                        </div>

                        {/* Interviewing Column */}
                        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
                            <h2 className="font-bold text-xl mb-4">Interviewing</h2>
                            {/* Other job cards would go here */}
                        </div>

                        {/* Pending Offer Column */}
                        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
                            <h2 className="font-bold text-xl mb-4">Pending Offer</h2>
                            {/* Other job cards would go here */}
                        </div>
                    </div>
                ) : (
                    // List view
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-lg font-medium">Saved Jobs</h1>
                        </div>
                        {savedJobs.isLoading ? (
                            <Loading />
                        ) : savedJobs.error ? (
                            <div>Error: {savedJobs.error.message}</div>
                        ) : savedJobs.data && savedJobs.data.length === 0 ? (
                            <div className="flex justify-center py-4">
                                <p>You have no saved Jobs. Get Searching!</p>
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
                                        jobId={job.id}
                                        isSaved={allSavedJobIds!.includes(job.id)}
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
