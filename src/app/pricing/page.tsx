import Link from "next/link"
import { Icons } from "~/components/pb/icons"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"

export default function PricingPage() {
    return (
        <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Simple, transparent pricing
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    AWS is expensive and we&apos;re broke. Posterboard will always have a generous free tier and any contributions are appreciated.
                </p>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
                <div className="flex flex-col">
                    <div className="grid gap-6">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            What&apos;s included in the Free Plan
                        </h3>
                        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Searches
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Recommended Jobs
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Resume Utilities
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Connecting With Others
                            </li>                            
                        </ul>
                    </div>
                    
                </div>    
                <div className="flex flex-col gap-4 text-center">
                <div>
                    <h4 className="text-7xl font-bold">Free</h4>
                    <p className="text-sm font-medium text-muted-foreground">
                        Billed Never
                    </p>
                </div>
                <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                    Get Started
                </Link>
                </div>
            </div>        
            <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
                <div className="flex flex-col">
                    <div className="grid gap-6">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            What&apos;s included in the Student Plan
                        </h3>
                        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Searches
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Recommended Jobs
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Resume Utilities
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Connecting With Others
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> API Access
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Interview Prep and Salary Insights
                            </li>
                        </ul>
                    </div>                    
                </div>    
                <div className="flex flex-col gap-4 text-center">
                <div>
                    <h4 className="text-7xl font-bold">$5</h4>
                    <p className="text-sm font-medium text-muted-foreground">
                    Billed Monthly
                    </p>
                </div>
                <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                    Get Started
                </Link>
                </div>
            </div>        
            <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
                <div className="flex flex-col">
                    <div className="grid gap-6">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            What&apos;s included in the Pro Plan
                        </h3>
                        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                        <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Searches
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Recommended Jobs
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Resume Utilities
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Connecting With Others
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> API Access
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Interview Prep and Salary Insights
                            </li>
                        </ul>
                    </div>
                    
                </div>    
                <div className="flex flex-col gap-4 text-center">
                <div>
                    <h4 className="text-7xl font-bold">$10</h4>
                    <p className="text-sm font-medium text-muted-foreground">
                    Billed Monthly
                    </p>
                </div>
                <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                    Get Started
                </Link>
                </div>
            </div>        
        </section>
    )
}