"use client"

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
// import GoogleIcon from "@mui/icons-material/Google"
import Link from 'next/link'
import { useToast } from "~/components/ui/use-toast"
import { useSearchParams } from 'next/navigation'

export function LoginAccountCard() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
 
  const { toast } = useToast()

  if (message) {
    toast({
      title: message,
    })
  }

  if (error) {
    toast({
      title: error,      
    })
  }

  return (
    <form action="/auth/sign-in" method="post">
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <div className="flex flex-row">
                <Link href="/api/auth/github">
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    Github
                </Link>
            </div>
          </Button>
          <Button variant="outline">
            <div className="flex flex-row">
                <Link href="/auth/google">
                    {/* <GoogleIcon className="mr-2 h-4 w-4" /> */}
                    Google
                </Link>
            </div>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or login with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" name="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" formAction="/auth/sign-in" >
          Login
        </Button>
      </CardFooter>
    </Card>
    </form>
  )
}