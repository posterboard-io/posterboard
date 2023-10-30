"use client"
import { signOut } from "next-auth/react"
import { Button } from "~/components/ui/button"

export default function SignOutButton() {
    return (
        <Button
            onClick={() => signOut({ callbackUrl: "/bye" }) }
            className="bg-transparent text-black dark:text-white"
        >
            Sign Out
        </Button>
    )
}