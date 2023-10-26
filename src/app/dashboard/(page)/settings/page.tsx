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
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

export default function DashboardSettings() {
    return (
    <div className="flex">
      <DashboardShell  />
      <main className="flex-grow p-6">
          <div className="flex justify-between items-center mb-4">              
            <form>
                <Card>
                    <CardHeader>
                    <CardTitle>Your Name</CardTitle>
                        <CardDescription>
                            Please enter your full name or a display name you are comfortable
                            with.
                        </CardDescription>
                    </CardHeader>
                        <CardContent>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="name">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    className="w-[400px]"
                                    size={32}            
                                />                        
                            </div>
                        </CardContent>
                    <CardFooter>
                        <button>                        
                            <span>Save</span>
                        </button>
                    </CardFooter>
                </Card>
            </form>
          </div>                
      </main>
    </div>
    )
}

