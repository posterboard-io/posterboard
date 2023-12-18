import Link from 'next/link'
import { ModeToggle } from '~/components/pb/theme/theme-toggle'
import { Button } from '~/components/ui/button'
import ClearLogo from '~/components/pb/clear-logo'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import Image from "next/legacy/image"
import SignOutButton from '~/components/pb/sign-out-button'
import { getServerAuthSession } from '~/server/auth'
import CommandBox from '~/components/pb/command-box'
import { sendSlackMessage } from '~/lib/sendSlack'

export const dynamic = 'force-dynamic'

export default async function Header() {
    const session = await getServerAuthSession() 

    if (session?.user.email !== "tkruer@asu.edu") {
      sendSlackMessage({ logString : `${session?.user.email || "Unknown"} Triggered Activity`, status : "success", failure: false })
    }
    
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">        
        <div className="w-full flex justify-between items-center px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm text-foreground">
        <div className="flex items-center gap-2 md:gap-4">
        <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:light-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />            
          </div>
          <Link href="/">
            <div className="flex items-center gap-2 md:gap-4">
              <ClearLogo />
                <h1 className="font-bold text-lg md:text-xl">Posterboard</h1>
                <span className="text-muted-foreground bg-muted px-1 text-xs rounded-sm">Beta</span>
            </div>
          </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
          {session ? (
            <div className="flex items-center gap-4">              
              <Button className="dark:bg-inherit bg-white text-black dark:text-white font-bold hover:bg-inherit">
                  <Link href="/search?page=1">
                      Search
                  </Link>              
                </Button>               
                <Button className="dark:bg-inherit bg-white text-black dark:text-white font-bold hover:bg-inherit">
                  <Link href="/dashboard">
                      Dashboard
                  </Link>                  
                </Button>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="dark:bg-inherit bg-white text-black dark:text-white font-bold hover:bg-inherit">
                        <div className="flex items-center gap-2">
                          <Image src={session.user?.image || ""} className="rounded-full" width={32} height={32} alt="" />
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />                       
                      <DropdownMenuCheckboxItem>
                          <div className="flex items-center gap-2 hover:bg-inherit">
                            <SignOutButton />
                          </div>
                      </DropdownMenuCheckboxItem>                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>                
              {/* <CommandBox /> */}
              <ModeToggle />              
            </div>
          ) : ( 
              <div className="flex items-center gap-4">
                <Button className="dark:bg-inherit bg-white text-black dark:text-white  border-2 rounded-md font-bold hover:bg-inherit">
                  <Link href="/search?page=1">
                      Jobs
                  </Link>              
                </Button>
                <Button className="dark:bg-inherit bg-white text-black dark:text-white  border-2 rounded-md font-bold hover:bg-inherit">
                  <Link href="/login">
                      Login
                  </Link>              
                </Button>
              <ModeToggle />
            </div>
          )}
          </div>          
        </div>
      </nav>
    )
}