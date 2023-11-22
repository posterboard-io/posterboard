import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div>
            <footer className="border-t border-b border-b-foreground/10 text-foreground">
                <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-between items-center">
                        <p className="text-sm sm:text-base mb-4 sm:mb-0 px-2">Posterboard.io - {new Date().getFullYear()}</p>
                        <div className="flex gap-3">
                            <Link href="https://github.com/posterboard-io" target="_blank" rel="noreferrer" className=" hover:text-gray-800">
                                <GitHubLogoIcon className="w-6 h-6" />                                
                            </Link>
                            <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer" className=" hover:text-gray-800">
                                <TwitterLogoIcon className="w-6 h-6" />                                
                            </Link>
                            <Link href="https://discord.gg/bVZKabxJ" target="_blank" rel="noreferrer" className=" hover:text-gray-800">
                                <DiscordLogoIcon className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto flex gap-3 flex-wrap justify-center sm:justify-start">
                        <Link href="/l/product"  className="text-sm sm:text-base hover:text-gray-800">
                            Product
                        </Link>
                        <Link href="/l/company" className="text-sm sm:text-base  hover:text-gray-800">
                            Company
                        </Link>
                        <Link href="/l/resources" className="text-sm sm:text-base  hover:text-gray-800">
                            Resources
                        </Link>
                        <Link href="/l/devs" className="text-sm sm:text-base  hover:text-gray-800">
                            Developers
                        </Link>
                        <Link href="/l/contact" className="text-sm sm:text-base  hover:text-gray-800">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
