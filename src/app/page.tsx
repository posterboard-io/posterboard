import Link from "next/link"
import { CheckIcon, MagnifyingGlassIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { ArrowRight, Bot, Code2, HeartHandshake, MailWarning } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Icons } from "~/components/pb/icons"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import Developers from "~/components/pb/developers"


export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-grid-slate-200/50">    
      <section className="space-y-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href=""
            className="rounded-2xl bg-gradient-to-r from-orange-400 via-blue-400 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg"
            target="_blank"
          >            
          We&apos;re Still building. Follow along on X for updates.
            <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer">
              <TwitterLogoIcon className="inline-block w-4 h-4 ml-1.5" />
            </Link>
          </Link>          
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-linear-gradient(rgb(251, 146, 60), rgb(96, 165, 250), rgb(59, 130, 246))">
            A better way to find a job.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Posterboard.io is a job board for the modern web. It&apos;s a place
            where developers can find verified jobs, from real companies with real people.
          </p>
          <div className="space-x-4">
            <Button className="text-white">
              <Link href="/login">
                Get Started
              </Link>
              <ArrowRight className="inline-block w-4 h-4 ml-1.5" />
            </Button>            
          </div>
        </div>
      </section>
      <hr className="border-t border-foreground/10" />
      <section
        id="features"
        className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Built by Developers, for Developers.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our mission is to delete the levels of absraction with the job search process. Find verified jobs, from real companies with real people.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <CheckIcon className="h-12 w-12 text-green-500" />
              <div className="space-y-2">
                <h3 className="font-bold">Verified Companies</h3>
                <p className="text-sm text-muted-foreground">
                  Jobs are verified by real people. No more fake jobs or suspicious companies.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <MailWarning className="h-12 w-12 text-red-500" />
              <div className="space-y-2">
                <h3 className="font-bold">No more Spam</h3>
                <p className="text-sm text-muted-foreground">
                  No more LinkedIn and no more recruiters.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Code2 className="h-12 w-12 text-purple-500" />
              <div className="space-y-2">
                <h3 className="font-bold">Developer First</h3>
                <p className="text-sm text-muted-foreground">
                  Get free access our API and automate your job search.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Bot className="h-12 w-12 text-yellow-500" />
              <div className="space-y-2">
                <h3 className="font-bold">Resume Utilities</h3>
                <p className="text-sm text-muted-foreground">
                  Test your resume against ATS tools and get feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <HeartHandshake className="h-12 w-12 text-blue-500" />
              <div className="space-y-2">
                <h3 className="font-bold">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;re active on Discord and Twitter. Join us!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <MagnifyingGlassIcon className="h-12 w-12 text-orange-500" />
              <div className="space-y-2">
                <h3 className="font-bold">Search by Tech Stack</h3>
                <p className="text-sm text-muted-foreground">
                  Want only React jobs? We&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>        
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We aren&apos;t here to farm data or waste anyone&apos;s time. We&apos;re here to help fellow Developers. <br />{" "}
            Find us on{" "}
            <Link
              href="https://github.com/posterboard-io"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>   
      
      {/* <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center">
                    Simple, transparent pricing
                </h2>
                <p className="text-muted-foreground sm:text-lg text-center">
                AWS is expensive and we&apos;re broke. <strong>Posterboard will always have a generous free tier</strong> and any contributions are appreciated.
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
        </section>    */}
    </div>
  );
}
