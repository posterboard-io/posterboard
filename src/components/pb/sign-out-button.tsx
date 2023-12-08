"use client"

import { signOut } from "next-auth/react"
import { Button } from "~/components/ui/button"

export default function SignOutButton() {
    return (
        <Button
            onClick={() => signOut({ callbackUrl: "/bye" }) }
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white"
        >
            Sign Out
        </Button>
    )
}