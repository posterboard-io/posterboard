import { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "~/components/pb/user-auth-form"
import posterboardClear from "../../../../public/svg/posterboard-clear.svg"
import Image from "next/image"
import { getServerAuthSession } from "~/server/auth"


export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default async function LoginPage() {

  const session = getServerAuthSession()  
  
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">      
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
            Welcome back
          </h1>
          {/* <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p> */}
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
        {/* <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
        </p> */}
      </div>
    </div>
  )
}