"use client"

import { DashboardShell } from "~/components/pb/dashboard-shell"
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"
import JobCard from "~/components/pb/job-card"
import React, { useState, useMemo } from 'react'

export default function DashboardApplications() {
    const savedJobs = api.jobs.getSavedJobs.useQuery();    
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    // TODO: Add a toggle to switch between list and kanban view - in the future

    return (
        <div className="flex">
            <DashboardShell />
            <main className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium">Applications</h1>
                </div>
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
            </main>
        </div>
    );
}
