import Link from "next/link"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"
import { UserAuthForm } from "~/components/pb/user-auth-form"
import posterboardClear from "../../../../public/svg/posterboard-clear.svg"
import Image from "next/legacy/image"


export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default async function RegisterPage() {

  return (
    
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image
              src={posterboardClear}
              alt="Logo"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            {/* <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p> */}
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/tos"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/pp"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        {/* <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
        </p> */}
      </div>
    </div>
  )
}