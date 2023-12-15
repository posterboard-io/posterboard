import { Card } from "~/components/ui/card"
import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "~/components/ui/card"
import { api } from "~/trpc/react"
import { getServerAuthSession } from "~/server/auth"

export default async function UserDetailsCard() {
    
    const session = (await getServerAuthSession()) || null

    return (
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
    )
}