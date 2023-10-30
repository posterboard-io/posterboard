import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div>
            <footer className="w-full flex justify-center border-t border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center p-3 text-sm text-foreground">
                    <div className="flex items-center gap-4">                        
                        <div className="flex flex-row items-center gap-4">
                            <p className="rounded-md text-right">Posterboard.io - {new Date().getFullYear()}</p>
                            <Link 
                                href="https://github.com/posterboard-io" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubLogoIcon className="w-6 h-6" />
                            </Link>
                            <Link 
                                href="https://twitter.com/joinposterboard" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterLogoIcon className="w-6 h-6" />
                            </Link>
                            <Link 
                                href="https://discord.gg/bVZKabxJ" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DiscordLogoIcon className="w-6 h-6" />                                
                            </Link>
                        </div>
                    </div>                    
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/l/product">
                        <p className="rounded-md text-right">Product</p>
                    </Link>
                    <Link href="/l/company">
                        <p className="rounded-md text-right">Company</p>
                    </Link>
                    <Link href="/l/resources">
                        <p className="rounded-md text-right">Resources</p>
                    </Link>
                    <Link href="/l/devs">
                        <p className="rounded-md text-right">Developers</p>
                    </Link>
                    <Link href="/l/contact">
                        <p className="rounded-md text-right">Contact</p>
                    </Link>
                </div>

            </footer>
        </div>
    )
}