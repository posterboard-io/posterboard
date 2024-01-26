"use client"
import posterboardClear from "~/../public/png/posterboard.png"
import discordLogo from "~/../public/svg/discord.svg"
import githubLogo from "~/../public/svg/github.svg"
import xLogo from "~/../public/svg/x_dark.svg"
import Image, { StaticImageData } from "next/legacy/image"
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


export default function Footer() {
    const posterboardClearImage: StaticImageData = posterboardClear
    
    return (        
<<<<<<< HEAD
        <footer>
            <section className="py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                <div className="flex-1 flex justify-start items-center space-x-4">
                    <Image 
                        src={posterboardClearImage} 
                        alt="Posterboard" 
                        width={36} 
                        height={36}
                        layout='fixed'
                    />
                    <p className="text-sm md:text-base whitespace-nowrap">Posterboard.io - {new Date().getFullYear()}</p>
                    <Link href="https://github.com/posterboard-io" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                        <GitHubLogoIcon className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                        <TwitterLogoIcon className="w-6 h-6 text-blue-500" />
                    </Link>
                    <Link href="https://discord.gg/V8w4Z9Burz" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                        <DiscordLogoIcon className="w-6 h-6 text-indigo-500" />
                    </Link>
                </div>                
                <div className="w-full sm:w-auto mt-4 sm:mt-0 flex gap-3 justify-center sm:justify-end">
                    <Link href="/product" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Product
                    </Link>
                    <Link href="/blog" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Blog
                    </Link>
                    <Link href="/company" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Company
                    </Link>
                    <Link href="/resources" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Resources
                    </Link>
                    <Link href="/devs" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Developers
                    </Link>
                    <Link href="/contact" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                        Contact
                    </Link>                        
                    </div>
                </div>                    
            </section>                
        </footer>
=======
        <div style={{ position: 'relative' }}>        
            <footer style={{ position: 'relative', zIndex: 1 }}>
                <section className="py-8">                
                    <div className="container mx-auto px-2 py-2 flex flex-wrap justify-between items-center">
                        <div className="w-full sm:w-auto mb-2 sm:mb-0 flex justify-between items-center"> 
                            <Image 
                                src={posterboardClearImage} 
                                alt="Posterboard" 
                                width={36} 
                                height={36}
                                layout='fixed'
                            />
                            <p className="text-sm sm:text-base mb-4 sm:mb-0 px-2">Posterboard.io - {new Date().getFullYear()}</p>
                            <div className="grid grid-flow-col gap-3 px-2 py-2">
                                <Link href="https://github.com/posterboard-io" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                                    <GitHubLogoIcon className="w-6 h-6" />
                                </Link>
                                <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                                    <TwitterLogoIcon className="w-6 h-6 text-blue-500" />
                                </Link>
                                <Link href="https://discord.gg/V8w4Z9Burz" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                                    <DiscordLogoIcon className="w-6 h-6 text-indigo-500" />
                                </Link>
                            </div>
                        </div>                    
                    <div className="w-full sm:w-auto flex gap-3 flex-wrap justify-center sm:justify-start">
                        <Link href="/product"  className="text-sm sm:text-base hover:text-gray-600">
                            Product
                        </Link>
                        <Link href="/blog" className="text-sm sm:text-base hover:text-gray-600">
                            Blog
                        </Link>
                        <Link href="/company" className="text-sm sm:text-base hover:text-gray-600">
                            Company
                        </Link>
                        <Link href="/resources" className="text-sm sm:text-base hover:text-gray-600">
                            Resources
                        </Link>
                        <Link href="/devs" className="text-sm sm:text-base hover:text-gray-600">
                            Developers
                        </Link>
                        <Link href="/contact" className="text-sm sm:text-base hover:text-gray-600">
                            Contact
                        </Link>                        
                        </div>
                    </div>                    
                </section>
            </footer>
        </div>
>>>>>>> main
    );
}
