"use client"
import posterboardClear from "~/../public/png/posterboard.png"
import Image, { StaticImageData } from "next/legacy/image"
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


export default function Footer() {
  const posterboardClearImage = posterboardClear;

  return (
    <footer>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            {/* Logo and Date Row */}
            <div>
              <Image
                src={posterboardClearImage}
                alt="Posterboard"
                width={36}
                height={36}
                layout='fixed'
              />
              <p className="text-sm md:text-base whitespace-nowrap mt-2">Posterboard.io - {new Date().getFullYear()}</p>
            </div>

            {/* Social Links Row */}
            <div className="flex space-x-4">
              <Link href="https://github.com/posterboard-io" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                <GitHubLogoIcon className="w-6 h-6 dark:text-white" />
              </Link>
              <Link href="https://twitter.com/joinposterboard" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                <TwitterLogoIcon className="w-6 h-6 text-blue-500" />
              </Link>
              <Link href="https://discord.gg/V8w4Z9Burz" target="_blank" rel="noreferrer" className="hover:text-gray-600">
                <DiscordLogoIcon className="w-6 h-6 text-indigo-500" />
              </Link>
            </div>

            {/* Navigation Links Row */}
            <div className="flex gap-3">
              <Link href="/blog" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                Blog
              </Link>
              <Link href="/company" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                Company
              </Link>
              <Link href="/resources" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                Resources
              </Link>
              <Link href="/contact" className="text-sm sm:text-base hover:text-gray-600" prefetch={true}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
