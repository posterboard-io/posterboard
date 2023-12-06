import Link from "next/link"
import { TwitterLogoIcon  } from "@radix-ui/react-icons"
import { ArrowRight } from 'lucide-react'
import { Button } from "~/components/ui/button"

export default function TitleSectionLanding() {
    return (
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
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white">
              <Link href="/login">
                Get Started
              </Link>
              <ArrowRight className="inline-block w-4 h-4 ml-1.5" />
            </Button>            
          </div>
        </div>
      </section>
    )
}