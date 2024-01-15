import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import { Card } from "~/components/ui/card"
import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "~/components/ui/card"

import { Button } from "~/components/ui/button"

import SignOutButton from "~/components/pb/sign-out-button"
import UserDetailsCard from "~/components/pb/settings/user-details"

export default function DashboardSettings() {

    return (
        <div className="flex">
            <DashboardShell  />
            <main className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium">Settings</h1>                                    
                </div>                              
                <div>
                    <UserDetailsCard />
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
                        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white">
                            Manage Subscription
                        </Button>
                    </Card>
                </div>
                <div>
                    <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                        <div>
                            <CardTitle className="text-2xl">                            
                                Sign Out
                            </CardTitle>
                            <CardDescription className="text-md text-black dark:text-white">
                                <p>
                                    Manage your subscription details.
                                </p>
                            </CardDescription>
                        </div>
                        <SignOutButton />
                    </Card>
                </div>
            </main>
        </div>
    )
}
