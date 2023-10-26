"use client"
import { DashboardShell } from "~/components/pb/dashboard-shell"
import { Card } from "~/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex">
      <DashboardShell />
      <main className="flex-grow p-6">
          <div className="flex flex-col justify-between items-center mb-4">
              <h1 className="text-lg font-medium">Dashboard</h1>    
              <hr className="border-gray-300 dark:border-slate-800" />
              <Card className="w-full mt-4">
                <div className="flex flex-col justify-between items-center mb-4">
                  <h1 className="text-lg font-medium">Welcome to your dashboard</h1>    
                  <hr className="border-gray-300 dark:border-slate-800" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Here you can manage your applications, resume, and settings</p>
                </div>
              </Card>
          </div>                
      </main>
    </div>
  )
}