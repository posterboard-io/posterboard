"use client"

import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import React, { useState } from 'react'
import { useToast } from "~/components/ui/use-toast"

import { Label } from "~/components/ui/label"

export default function ContactUs() {
    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const { toast } = useToast();

    const handleSubmit = async () => {       

        try {
            const response = await fetch('/api/add-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast({
                    title: "Error ❌",
                    description: "Something went wrong. Staff has been notified."
                });
                return;
            }

            const data = await response.json();
            toast({
                title: "Success ✅",
                description: "Preferences saved successfully!",
            });
            

        } catch (error) {
            toast({
                title: "Error",
                description: 'Something went wrong.',
            });
            
        }
    };


    return (
    <div className="flex items-center justify-center h-screen ">
      <Card>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2 py-2">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button>Send message</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    )
}