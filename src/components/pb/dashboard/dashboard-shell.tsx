import { Home, Paperclip} from "lucide-react"
import Link from "next/link"
import { GearIcon, MagicWandIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export function DashboardShell() {

  return (
    <div className="flex flex-col">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 dark:bg-slate-900 text-gray-800 p-4">
        <nav className="">
          <div className="py-1">
            <Card className="flex flex-col py-2 items-center justify-center space-y-3 shadow-md "> 
            <Link href="/dashboard" prefetch={true}>
              <CardTitle className="flex items-center space-x-3"> {/* Adjusted icon and text spacing */}
                <Home className="w-4 h-4 text-black dark:text-white " />
                <span className="text-lg font-semibold px-2 text-black dark:text-white">Home</span>
              </CardTitle>
              </Link>
            </Card>
          </div>
          <div className="py-1">
            <Card className="flex flex-col py-2 items-center justify-center space-y-3 shadow-md "> 
            <Link href="/dashboard/recommended" prefetch={true}>
              <CardTitle className="flex items-center space-x-2">            
                <MagicWandIcon className="w-4 h-4 text-black dark:text-white " />
                <span className="text-lg font-semibold px-2 text-black dark:text-white">Recommended</span>                
              </CardTitle>            
              </Link>
            </Card>
            </div>
          <div className="py-1">            
            <Card className="flex flex-col py-2 items-center justify-center space-y-3 shadow-md "> 
              <Link href="/dashboard/applications" prefetch={true}>
                <CardTitle className="flex items-center space-x-2">      
                  <PaperPlaneIcon className="w-4 h-4 text-black dark:text-white " />
                  <span className="text-lg font-semibold px-2 text-black dark:text-white">Applications</span>     
                </CardTitle>
                </Link>
            </Card>
          </div>
          <div className="py-1">            
            <Card className="flex flex-col py-2 items-center justify-center space-y-3 shadow-md "> 
              <Link href="/dashboard/resume" prefetch={true}>
                <CardTitle className="flex items-center space-x-2">      
                  <Paperclip className="w-4 h-4 text-black dark:text-white " />
                  <span className="text-lg font-semibold px-2 text-black dark:text-white">Resume</span>     
                </CardTitle>
                </Link>
            </Card>
          </div>         
          <div className="py-1">          
            <Card className="flex flex-col py-2 items-center justify-center space-y-3 shadow-md "> 
              <Link href="/dashboard/settings" prefetch={true}>
              <CardTitle className="flex items-center space-x-2">            
                <GearIcon className="w-4 h-4 text-black dark:text-white " />
                <span className="text-lg font-semibold px-2 text-black dark:text-white">Settings</span>                
              </CardTitle>
              </Link>
            </Card>
          </div>
        </nav>
      </aside>
    </div>
  )
}
