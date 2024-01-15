import { CheckIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Bot, Code2, HeartHandshake, MailWarning } from 'lucide-react'

export default function FeatureGrid() {
    return (
        <>
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
    </>
    )
}