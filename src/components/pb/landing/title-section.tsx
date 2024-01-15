import Link from "next/link"
import { TwitterLogoIcon  } from "@radix-ui/react-icons"
import { ArrowUpRight } from 'lucide-react'

export default function TitleSectionLanding() {
    return (
    <>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[200.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <Link
                href="https://twitter.com/joinposterboard" 
                target="_blank"
                className="rounded-2xl bg-gradient-to-r from-orange-400 via-blue-400 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg"                        
              >            
                We&apos;re still building. Follow along on X for updates.
              <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer">
                <TwitterLogoIcon className="inline-block w-4 h-4 ml-1.5" />
              </Link>
            </Link>                     
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white sm:text-6xl">
            A Better Way To Find A Job.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground  sm:text-md">
            Posterboard.io is a job board for the modern web. It&apos;s a place where developers can find verified jobs from top companies.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="/login"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Get Searching
              <ArrowUpRight className="inline-block w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff8f3e] to-[#0084ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </> 
    )
}