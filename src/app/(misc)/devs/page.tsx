"use client"
import posterboardClear from "~/../public/png/posterboard.png"
import Image, { StaticImageData } from "next/legacy/image"

export default function DeveloperPage() {
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
                <h2 className="text-2xl font-bold  mb-4">Developers</h2>
                <p className="mb-3">
                    We&apos;re all about developers. We&apos;ve decided to open up our API just for that reason. 
                    Build on top of our platform and use our data to create something awesome. (Docs coming soon).
                </p>                
            </div>
            </div>
        </div>
    )
}