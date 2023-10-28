import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";


export default async function TestPage() {
    const jobs = await api.jobs.getLatest.query()

    return (
        <div className="min-h-screen">
            {jobs.map((job) => (
                <div key={job.id}>
                    <h1>{job.title}</h1>
                    <p>{job.company}</p>
                </div>
            ))}
        </div>
    )
}
