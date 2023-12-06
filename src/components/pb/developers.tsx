import Link from "next/link"
import Image from "next/legacy/image"
import DevelopersGif from "public/gifs/developers.gif"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Developers() {
  return (
    <section className="relative w-full overflow-hidden h-64">
      <Image alt="Background" className="z-10" layout="fill" objectFit="cover" src={DevelopersGif} />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-30">
        <h1 className="text-4xl font-bold text-white">Proudly Open Source.</h1>
        <p className="text-xl text-white">
            We aren&apos;t here to farm data or waste anyone&apos;s time. 
            We&apos;re here to help fellow Developers. 
        </p>
        <div className="space-x-4">
        <Link
            href="https://github.com/posterboard-io"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
        >
            GitHub
        </Link>
        .{" "}
        </div>
      </div>
    </section>
  )
}

