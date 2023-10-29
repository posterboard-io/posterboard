import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { decodeBase64ToDataURI } from "~/lib/base64";
import Image from "next/image";

export default async function TestPage() {
    const jobs = await api.jobs.getLatest.query()    

    return (
        <div className="min-h-screen">
            {jobs.map((job) => {
                // Decode the base64 image
                if (!job.companyLogoBase64) {
                    return null;
                } else {
                    const imageSrc = decodeBase64ToDataURI({ str: job.companyLogoBase64 });
                    return (
                        <div key={job.id}>
                            <h1>{job.title}</h1>
                            <p>{job.company}</p>
                            <p>{job.location}</p>                    
                            <Image 
                                src={imageSrc} 
                                width={200}
                                height={200}
                                alt={job.title}  // Consider adding an alt tag for accessibility
                                loading="lazy"
                            />
                        </div>
                    );    
                }                                
            })}
        </div>
    )
}
