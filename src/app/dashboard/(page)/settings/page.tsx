import { DashboardShell } from "~/components/pb/dashboard-shell"
import { Card } from "~/components/ui/card"
import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
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
                                Export Saved Jobs
                            </CardTitle>
                            <CardDescription className="text-md text-black dark:text-white">
                                Export your saved jobs to a CSV file.
                            </CardDescription>
                        </div>
                        <Button 
                            className="bg-black dark:bg-white text-white dark:text-black"
                            
                        >

                            Download CSV
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
