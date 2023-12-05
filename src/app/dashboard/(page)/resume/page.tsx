import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,    
} from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { getServerAuthSession } from "~/server/auth"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"


export default async function DashboardResume() {

  const session = await getServerAuthSession()     
  
  return (
    <div className="flex">
        <DashboardShell  />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium">Resume</h1>                                    
            </div>                              
            {/* Render based on session condition */}
            {session ? (
                <div>
                  <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                    <div>
                        <CardTitle className="text-2xl">                            
                            Resume ATS
                        </CardTitle>                                       
                        <CardDescription className="text-md text-black dark:text-white py-1">
                          Modern companies often use Applicant Tracking Systems (ATS) to filter out resumes that don&apos;t 
                          match the job description. It&apos;s important to optimize your resume for ATS, despite how frustrating 
                          it can be. We built a tool to help you optimize your resume for ATS. It&apos;s free to use, 
                          and you can upload your resume as many times as you want.
                        </CardDescription>
                        <CardDescription className="text-md text-black dark:text-white py-1">
                          Your resume is never stored on our servers. It&apos;s processed in your browser, and the results are displayed on your screen.{" "}
                          <Link href="/resume-ats" className="text-blue-500 hover:text-blue-700">
                            Want to see how it works?
                          </Link>
                        </CardDescription>
                        <CardContent>           
                          <div className="flex flex-col items-center py-4">               
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="resume">Resume</Label>
                              <Input id="resume" type="file" />
                            </div>
                          </div>
                        </CardContent>
                        <div className="text-center">      
                          <CardDescription className="text-md text-black dark:text-white py-2 items-center justify-center">
                            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white">
                              Run Resume ATS
                            </Button>
                          </CardDescription>
                        </div>                      
                    </div>                      
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