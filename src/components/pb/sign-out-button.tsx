"use client"

import { useRouter } from "next/navigation"; // Add this import
import { signOut } from "next-auth/react"
import { Button } from "~/components/ui/button"

export default function SignOutButton() {
    const router = useRouter()
    
    return (
        <Button
            onClick={() => {
                signOut();
                router.push("/bye"); 
            }}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white"
        >
            Sign Out
        </Button>
    )
}
    