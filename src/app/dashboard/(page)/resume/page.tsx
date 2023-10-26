import { DashboardShell } from "~/components/pb/dashboard-shell"

export default function DashboardResume() {
  return (
    <div className="flex">
      <DashboardShell />
      <main className="flex-grow p-6">
          <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-medium">Resume</h1>                                    
          </div>                
      </main>
    </div>
  )
}