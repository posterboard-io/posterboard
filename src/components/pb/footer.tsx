import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { SlackIcon } from "lucide-react";

export default function Footer() {
    return (
        <div>
            <footer className="w-full flex justify-center border-t border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center p-3 text-sm text-foreground">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <div className="flex flex-row items-center gap-4">
                                <p className="rounded-md text-right">Posterboard.io - {new Date().getFullYear()}</p>
                                <Link href="/" >
                                    <GitHubLogoIcon className="w-6 h-6" />
                                </Link>
                                <Link href="/">
                                    <TwitterLogoIcon className="w-6 h-6" />
                                </Link>
                                <Link href="/">
                                    <DiscordLogoIcon className="w-6 h-6" />                                
                                </Link>
                            </div>
                        </Link>
                    </div>                    
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/product">
                        <p className="rounded-md text-right">Product</p>
                    </Link>
                    <Link href="/company">
                        <p className="rounded-md text-right">Company</p>
                    </Link>
                    <Link href="/resources">
                        <p className="rounded-md text-right">Resources</p>
                    </Link>
                    <Link href="/devs">
                        <p className="rounded-md text-right">Developers</p>
                    </Link>
                    <Link href="/contact">
                        <p className="rounded-md text-right">Contact</p>
                    </Link>
                </div>

            </footer>
        </div>
    )
}