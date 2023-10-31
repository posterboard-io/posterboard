import { DashboardShell } from "~/components/pb/dashboard-shell"
import { Card } from "~/components/ui/card"
import Link from "next/link"

export default function Dashboard() {  

  return (
    <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                      Dashboard
                    </h1>
                  </div>                  
                </div>                              
              </div>                                  
            </div>                
        </main>
      </div>
  )
}