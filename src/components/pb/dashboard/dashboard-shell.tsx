"use client"

import { useState } from 'react'
import { Button } from "~/components/ui/button"

import { Home, Paperclip, RectangleHorizontal, Sigma } from "lucide-react"
import Link from "next/link"
import { GearIcon, LinkBreak1Icon, MagicWandIcon, PaperPlaneIcon } from "@radix-ui/react-icons"

export function DashboardShell() {
  
  const [activeLink, setActiveLink] = useState('/dashboard')
  

  return (
    <div className="flex flex-col">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 dark:bg-slate-900 text-gray-800 p-4">        
        <nav className="space-y-2">
          <Button onClick={() => setActiveLink('/dashboard')} className={`w-full flex items-center space-x-2 bg-inherit hover:bg-gray-400 active:bg-gray-300 py-2 px-2 rounded-lg ${activeLink === '/dashboard' ? 'text-black' : 'text-gray-500'}`}>
            <Link href="/dashboard">
              <div className="flex items-center">
                <Home className={`w-4 h-4 ${activeLink === '/dashboard' ? 'text-black dark:text-white' : 'text-gray-500'} hover:text-blue-600 active:text-gray-900 text-black dark:text-white`} />
                <span className="text-sm font-medium px-2 text-black dark:text-white">Home</span>                
              </div>
            </Link>
          </Button>
          <Button onClick={() => setActiveLink('/dashboard/recommended')} className={`w-full flex items-center space-x-2 bg-inherit hover:bg-gray-400 active:bg-gray-300 py-2 px-2 rounded-lg ${activeLink === '/dashboard/recommended' ? 'text-black' : 'text-gray-500'}`}>
            <Link href="/dashboard/recommended">
              <div className="flex items-center">
                <MagicWandIcon className={`w-4 h-4 ${activeLink === '/dashboard/recommended' ? 'text-black dark:text-white' : 'text-gray-500'} hover:text-blue-600 active:text-gray-900 text-black dark:text-white`} />
                <span className="text-sm font-medium px-2 text-black dark:text-white">Recommended</span>                
              </div>
            </Link>
          </Button>
          <Button onClick={() => setActiveLink('/dashboard/applications')} className={`w-full flex items-center space-x-2 bg-inherit hover:bg-gray-400 active:bg-gray-300 py-2 px-2 rounded-lg ${activeLink === '/dashboard/applications' ? 'text-black' : 'text-gray-500'}`}>
            <Link href="/dashboard/applications">
              <div className="flex items-center">
                <PaperPlaneIcon className={`w-4 h-4 ${activeLink === '/dashboard/applications' ? 'text-black dark:text-white' : 'text-gray-500'} hover:text-blue-600 active:text-gray-900 text-black dark:text-white`} />
                <span className="text-sm font-medium px-2 text-black dark:text-white">Applications</span>                
              </div>
            </Link>
          </Button>
          <Button onClick={() => setActiveLink('/dashboard/resume')} className={`w-full flex items-center space-x-2 bg-inherit hover:bg-gray-400 active:bg-gray-300 py-2 px-2 rounded-lg ${activeLink === '/dashboard/resume' ? 'text-black' : 'text-gray-500'}`}>
            <Link href="/dashboard/resume">
              <div className="flex items-center">
                <Paperclip className={`w-4 h-4 ${activeLink === '/dashboard/resume' ? 'text-black dark:text-white' : 'text-gray-500'} hover:text-blue-600 active:text-gray-900 text-black dark:text-white`} />
                <span className="text-sm font-medium px-2 text-black dark:text-white">Resume</span>                
              </div>
            </Link>
          </Button>
          <Button onClick={() => setActiveLink('/dashboard/settings')} className={`w-full flex items-center space-x-2 bg-inherit hover:bg-gray-400 active:bg-gray-300 py-2 px-2 rounded-lg ${activeLink === '/dashboard/settings' ? 'text-black' : 'text-gray-500'}`}>
            <Link href="/dashboard/settings">
              <div className="flex items-center">
                <GearIcon className={`w-4 h-4 ${activeLink === '/dashboard/settings' ? 'text-black dark:text-white' : 'text-gray-500'} hover:text-blue-600 active:text-gray-900 text-black dark:text-white`} />
                <span className="text-sm font-medium px-2 text-black dark:text-white">Settings</span>                
              </div>
            </Link>
          </Button>
        </nav>
      </aside>
    </div>
  )
}
