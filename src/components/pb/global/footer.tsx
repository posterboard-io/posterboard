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
        <div style={{ position: 'relative' }}>        
            <footer style={{ position: 'relative', zIndex: 1 }}>
                {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[18rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3e82ff] to-[#0084ff] opacity-30 sm:left-[calc(50%-15rem)] sm:w-[36rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />                
                </div> */}

                {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[18rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-tl from-[#3e82ff] to-[#0084ff] opacity-30 sm:left-[calc(50%+15rem)] sm:w-[36rem]"
                        style={{
                            clipPath: 'polygon(25.9% 44.1%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)',
                        }}
                    />                
                </div> */}
                
                <section className="py-8">  
                    <hr className="border-gray-200 dark:border-gray-800" />
                                                  {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[18rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3e82ff] to-[#0084ff] opacity-30 sm:left-[calc(50%-15rem)] sm:w-[36rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />                
                </div> */}

                {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[18rem] -translate-x-1/2 rotate-[-30deg] bg-gradient-to-tl from-[#3e82ff] to-[#0084ff] opacity-30 sm:left-[calc(50%+15rem)] sm:w-[36rem]"
                        style={{
                            clipPath: 'polygon(25.9% 44.1%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)',
                        }}
                    />                
                </div> */}
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
                        <Link href="/l/product"  className="text-sm sm:text-base hover:text-gray-600">
                            Product
                        </Link>
                        <Link href="/l/company" className="text-sm sm:text-base hover:text-gray-600">
                            Company
                        </Link>
                        <Link href="/l/resources" className="text-sm sm:text-base hover:text-gray-600">
                            Resources
                        </Link>
                        <Link href="/l/devs" className="text-sm sm:text-base hover:text-gray-600">
                            Developers
                        </Link>
                        <Link href="/l/contact" className="text-sm sm:text-base hover:text-gray-600">
                            Contact
                        </Link>
                        </div>
                    </div>                    
                </section>
            </footer>
        </div>
    );
}



// --
// --
// --
// msft good friends at google amaazon and facebook
// --
// culture of the company
// --
// startup more responsibility
// --
// --
// --