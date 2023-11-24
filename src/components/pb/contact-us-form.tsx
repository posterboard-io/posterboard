"use client"

import React, { useState } from 'react'
import { useToast } from "~/components/ui/use-toast"
import { api } from "~/trpc/react"
import { FormEvent } from "react"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import { useRouter } from "next/navigation";
import { set } from 'zod'


export default function ContactUsForm() {

    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const { toast } = useToast();
    const router = useRouter();
      

    const sendMessage = api.contact.sendSlackMessageToUs.useMutation({
        onSuccess: () => {
            toast({
                title: "Message sent ✅",
                description: "We'll get back to you as soon as possible.",               
            });
            router.refresh()
            setMessage("")
            setEmail("")
            setFirstName("")
            setLastName("")
            }
        })

    return (
        <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            sendMessage.mutate({ 
                message,
                email,
                firstName,
                lastName,
             });    
        }} className="space-y-8">
              <div className="space-y-2 py-2">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name"
                           value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name"
                           value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email"
                         value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]"
                            value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <Button type="submit">Send message</Button>
              </div>
            </form>
        </div>
    )
}