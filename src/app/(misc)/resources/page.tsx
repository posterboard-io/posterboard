"use client"
import posterboardClear from "~/../public/png/posterboard.png"
import Image, { StaticImageData } from "next/legacy/image"

export default function ResourcesPage() {
    const posterboardClearImage: StaticImageData = posterboardClear
    return (
        <div className="flex min-h-screen items-center justify-center">            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-6 items-center">
                <Image 
                    src={posterboardClearImage} 
                    alt="Posterboard" 
                    className="h-36 w-36"
                />
            </div>
            <div className="p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold  mb-4">Resources</h2>
                <p className="mb-3">
                    Finding a job is hard. We want to make it easier for you. We&apos;ve compiled a list of resources that we think will help you in your job search. If you have any suggestions for resources that you&apos;d like to see here please reach out to us at <a className="text-blue-500" href="mailto:tk@posterboard.io"> my email</a>.
                </p>
                <hr className="my-4" />
                <h3 className="text-xl font-bold mb-2">Resume</h3>
                <p className="mb-3">
                    Your resume is the first thing that recruiters and hiring managers see. It&apos;s important to make a good first impression. We&apos;ve compiled a list of resources that will help you build a resume that will stand out.
                </p>
                <ul className="list-disc list-inside mb-3">
                    <li>
                        <a className="text-blue-500" href="https://www.careercup.com/resume">Career Cup</a>
                    </li>
                    <li>
                        <a className="text-blue-500" href="https://www.careercup.com/resume">Resume Worded</a>
                    </li>
                    <li>
                        <a className="text-blue-500" href="https://www.careercup.com/resume">Resume Genius</a>
                    </li>
                </ul>                
            </div>
            </div>
        </div>
    )
}