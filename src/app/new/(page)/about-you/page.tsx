import Link from 'next/link'
import BubbleSelect from '~/components/pb/bubble-select'
import { CardTitle, Card, CardDescription, CardFooter, CardHeader } from "~/components/ui/card"
import { cookies } from "next/headers"
import { Button } from "~/components/ui/button"


export default async function AboutYouPage() {

    const { user } = {
        user: {
          email: ''
        }
      }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-28">
            <Card className="w-full mt-4 p-4">
                <CardTitle className="text-2xl py-2">
                    Welcome, {user?.email}!
                </CardTitle>
                <hr className="border-gray-300 dark:border-slate-800 my-2" />
                <CardDescription className="text-md text-black dark:text-white">   
                    <div className="px-10 py-2">
                        <p className="text-lg py-2 font-semibold">
                        We are excited to help you find your next role!        
                        </p>
                        <p className="text-lg py-2 font-semibold">                            
                            Let&apos;s start by selecting your tech stack
                        </p>         
                    </div>
                    <hr className="border-gray-300 dark:border-slate-800 my-2" />
                    <div className="px-10 py-2">
                        <BubbleSelect />
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