import Link from 'next/link'
import { ModeToggle } from '~/components/pb/theme-toggle'
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
import { getServerAuthSession } from '~/server/auth'
import Image from 'next/image'
import SignOutButton from '~/components/pb/sign-out-button'

export const dynamic = 'force-dynamic'

export default async function Header() {
    const session = await getServerAuthSession()
    // const session = true
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">        
        <div className="w-full flex justify-between items-center p-3 text-sm text-foreground">
            <div className="flex items-center gap-4">
                <Link href="/">
                  <div className="flex items-center gap-4 h-4">
                    <ClearLogo />
                  </div>
                </Link>                                          
            </div>
          {session ? (
            <div className="flex items-center gap-4">
              <Button className="dark:bg-inherit bg-white text-black dark:text-white  border-2 rounded-md font-bold hover:bg-inherit">
                  <Link href="/jobs">
                      Jobs
                  </Link>              
                </Button>
                <Button className="dark:bg-inherit bg-white text-black dark:text-white  border-2 rounded-md font-bold hover:bg-inherit">
                  <Link href="/dashboard">
                      Dashboard
                  </Link>                  
                </Button>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-transparent">
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
              <ModeToggle />
            </div>
          ) : ( 
              <div className="flex items-center gap-4">
                <Button className="dark:bg-inherit bg-white text-black dark:text-white  border-2 rounded-md font-bold hover:bg-inherit">
                  <Link href="/jobs">
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
      </nav>
    )
}