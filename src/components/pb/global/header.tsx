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
import { sendSlackMessage } from '~/lib/sendSlack'
import santaHatSVG from '~/../public/svg/holidays/santa-hat.svg';


export default async function Header() {    
    const session = await getServerAuthSession()

    if (session) {
      const { user } = session
      if (user?.email !== 'tkruer@asu.edu') {
        sendSlackMessage({
          logString: `User ${user!.name} (${user?.email}) has logged in.`, 
          status: 'success',
          failure: false,
        })
      }
    }
    
    return (
      <header>
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">        
          <div className="w-full flex justify-between items-centertext-xs text-foreground">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:light-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />            
            </div>
              <Link href="/" className="flex items-center">
                <ClearLogo />
                <div className="flex flex-col items-center">
                  <h1 className="font-bold text-lg md:text-md sm:text-sm">Posterboard</h1>
                  <span className="text-muted-foreground bg-muted px-1 text-xs rounded-sm">Beta</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              {session ? (
              <div className="flex items-center gap-4">                              
                <Link href="/search?page=1" prefetch={true} className="dark:bg-inherit bg-inherit text-black dark:text-white font-semibold hover:bg-inherit ">
                    Search
                </Link>                                              
                <Link href="/dashboard" prefetch={true} className="dark:bg-inherit bg-inherit text-black dark:text-white font-semibold hover:bg-inherit ">
                    Dashboard
                </Link>
                <ModeToggle />              
              </div>
            ) : ( 
                <div className="flex items-center gap-4">
                  <Link href="/login" prefetch={true} className="dark:bg-inherit bg-inherit text-black dark:text-white font-bold hover:bg-inherit">
                      Login
                  </Link>              
                <ModeToggle />
              </div>
            )}
            </div>                    
        </nav>
      </header>      
    )
}

