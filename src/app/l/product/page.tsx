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
                <h2 className="text-2xl font-bold  mb-4">Built by Developers for Developers</h2>
                <p className=" mb-3">
                    Our platform connects talented developers with companies that value their skills and expertise. We believe in creating a community where devs can find not just a job, but the right job.
                </p>
                <p className="">
                    Whether you're looking for your first developer role or you're a seasoned tech lead seeking new challenges, we're here to support you. With personalized job recommendations, a developer-centric job search, and resources to help you at every stage of your career, our job website is crafted for those who not only love coding but also value a great work environment.
                </p>                            
            </div>
            </div>
        </div>
    )
}