"use client"
import { useMemo } from "react";
import { api } from "~/trpc/react";
import Loading from "~/components/pb/utils/loading";
import JobKanbanCard from "~/components/pb/job-card-kanban";

export default function TestPage() {
    
    const savedJobs = api.jobs.getSavedJobs.useQuery();
    
    const allSavedJobIds = useMemo(() => savedJobs.data?.map(job => job.jobPostingId), [savedJobs.data]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
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
    )
}