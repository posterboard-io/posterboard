import { CardTitle, Card, CardDescription, CardFooter, CardHeader } from "~/components/ui/card"
import Link from "next/link"
import { cookies } from "next/headers"
import BubbleSelect from "~/components/pb/bubble-select"
import { Button } from "~/components/ui/button"
import { Select } from "~/components/ui/select"
import RolesAndGrowth from "~/components/pb/roles-growth"
import { useRouter } from 'next/navigation'

export default async function NewPage() {
    const { user } = {
        user: {
          email: ''
        }
      }
    

    return (        
        <div className="flex flex-col items-center justify-center min-h-screen px-28 py-4">
            <Card className="w-full mt-4 p-4">
                <CardTitle className="text-2xl py-2">
                    Welcome, {user?.email}!
                </CardTitle>
                <hr className="border-gray-300 dark:border-slate-800 my-2" />
                <CardDescription className="text-md text-black dark:text-white">                    
                    <p className="px-10 py-2">
                        Navigating the software job market can be overwhelming due to its competitive nature and the sheer volume of opportunities.
                        Generic job platforms, tailored for a broad audience, often lack the specifics required for software job listings. 
                        Such platforms can yield results from jQuery to COBOL, causing confusion and inefficiency.
                    </p>
                    <div className="px-10 py-2">
                        Recognizing these challenges:
                        <ul className="list-disc list-inside pl-4">
                            <li>Many job listings come from dubious sources.</li>
                            <li>The variety of frameworks and languages results in a vast range of search results.</li>
                            <li>Professionals often aim to progress from one level to the next, like from L2 to L3.</li>
                        </ul>
                    </div>
                    <p className="px-10 py-2">
                        As software engineers, we utilized our expertise to devise an optimized job search algorithm for our peers. 
                        We&apos;ve proudly <Link href="" className="text-blue-500 hover:text-blue-800">open-sourced</Link> our solution and
                        our goal is to craft a platform to assist fellow developers.
                    </p>                    
                    <p className="text-center px-10 py-2">
                        <strong>Remember: you can lead a horse to water, but you can&apos;t make it drink!</strong>
                    </p>
                </CardDescription>
            </Card>            
            <Card className="w-full mt-4 p-4">
                <CardDescription className="text-md text-black dark:text-white">   
                    <div className="px-10 py-2">                        
                        <p className="text-lg py-2 font-semibold">                            
                            Let&apos;s start by selecting your tech stack
                        </p>         
                    </div>
                    <hr className="border-gray-300 dark:border-slate-800 my-2" />
                    <div className="px-24 py-2">
                        <BubbleSelect />
                    </div>
                    <div className="px-10 py-2 text-lg font-semibold">
                        What kind of roles are you looking for?
                    </div>
                    <hr className="border-gray-300 dark:border-slate-800 my-2" />   
                    <div className="px-24 py-2">
                        <RolesAndGrowth />
                    </div>                
                </CardDescription>
                <CardFooter className="justify-center items-center">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link href="/new/about-you">Get Recommended Roles</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}