import Link from "next/link"
import { CheckIcon, MagnifyingGlassIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { ArrowRight, Bot, Code2, HeartHandshake, MailWarning } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Icons } from "~/components/pb/icons"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import Developers from "~/components/pb/developers"
import TitleSectionLanding from "~/components/pb/landing/title-section"
import LandingCountUpJobs from "~/components/pb/landing/landing-count-up-jobs"
import NotifyOnLaunch from "~/components/pb/landing/notify-when-launch"

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-grid-slate-200/50">    
      <TitleSectionLanding />
      <hr className="border-t border-foreground/10" />
      <section
        id="features"
        className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
        <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:light-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />            
          </div>
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
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:light-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>     
        
      </section>
      <hr className="border-t border-foreground/10" />
      <section className="container py-8 md:py-12 lg:py-24"
        style={{
          background: "radial-gradient(at bottom, #ff8f3e, transparent 70%)"
        }}>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Develop Your Career, One Commit at a Time.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            High quality jobs, from verified high quality companies. 
            We&apos;re here to help you find your next job.            
          </p>
          <LandingCountUpJobs />          
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
