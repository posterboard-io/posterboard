import { DashboardShell } from "~/components/pb/dashboard-shell"
import { Card } from "~/components/ui/card"
import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "~/components/ui/card"
import { Label } from "~/components/ui/label"
import { api } from "~/trpc/react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Link from "next/link"
import { getServerAuthSession } from "~/server/auth"

export default async function DashboardSettings() {
    
    const session = await getServerAuthSession() || null
    

    return (
        <div className="flex">
            <DashboardShell  />
            <main className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium">Settings</h1>                                    
                </div>                              
                {/* Render based on session condition */}
                {session ? (
                    <div>
                        <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                        <div>
                            <CardTitle className="text-2xl">                            
                                Your Account
                            </CardTitle>
                            <CardDescription className="text-md text-black dark:text-white">
                                <p>
                                    {session?.user.email} - {session?.user.name}
                                </p>                                
                            </CardDescription>
                        </div>
                        
                    </Card>
                    <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                        <div>
                            <CardTitle className="text-2xl">                            
                                Your Subscription - FREE
                            </CardTitle>
                            <CardDescription className="text-md text-black dark:text-white">
                                <p>
                                    Manage your subscription details.
                                </p>
                            </CardDescription>
                        </div>
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Manage Subscription
                        </Button>
                    </Card>
                    
                    <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                        <div>
                            <CardTitle className="text-2xl">                            
                                Delete Account
                            </CardTitle>
                            <CardDescription className="text-md text-black dark:text-white">
                                <p>
                                    Your account will be deleted permanently.
                                </p>
                            </CardDescription>
                        </div>
                        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete Account
                        </Button>
                    </Card>
                    </div>
                ) : (
                    <div>
                        <CardTitle className="text-2xl">
                            You are not logged in.
                        </CardTitle>
                    </div>
                )}
            </main>
        </div>
    )
}
