"use client"
import posterboardClear from "~/../public/png/posterboard.png"
import Image, { StaticImageData } from "next/legacy/image"

export default function Product() {
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
                <h2 className="text-2xl font-bold  mb-4">About Us</h2>
                <p className="mb-3">
                    This all started as a hobby project really. Without a doubt the job search process is broken. We wanted to create a platform that would help developers find the right job. We believe that the right job is one that not only matches your skillset but also your personality and values. We want to help you find a job that you love.
                </p>
                <p className="">
                    I&apos;m the only one that works on this. I&apos;m a full stack developer with a passion for building things. I&apos;m always looking for ways to improve the platform so if you have any feedback or suggestions please reach out to me at <a className="text-blue-500" href="mailto:tk@posterboard.io"> my email</a>.
                </p>                            
            </div>
            </div>
        </div>
    )
}