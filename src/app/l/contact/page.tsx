import {
  Card,
  CardContent,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import React, { useState } from 'react'
import { Label } from "~/components/ui/label"
import { useToast } from "~/components/ui/use-toast"

import { api } from "~/trpc/server"
import { FormEvent } from "react"
import ContactUsForm from "~/components/pb/contact-us-form"

export default async function ContactUs() {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card>
          <CardContent>
            <ContactUsForm />
          </CardContent>
        </Card>
      </div>
    );
  }