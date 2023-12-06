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

export const dynamic = 'force-dynamic'

export default async function Header() {
    const session = await getServerAuthSession() 
    
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">        
        <div className="w-full flex justify-between items-center px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm text-foreground">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 md:gap-4">
              <ClearLogo />
              <h1 className="font-bold text-lg md:text-xl">Posterboard</h1>
            </div>
          </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
          {session ? (
            <div className="flex items-center gap-4">              
              <Button className="dark:bg-inherit bg-white text-black dark:text-white font-bold hover:bg-inherit">
                  <Link href="/search">
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
                  <Link href="/search">
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