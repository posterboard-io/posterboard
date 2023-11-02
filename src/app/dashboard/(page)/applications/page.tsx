import { DashboardShell } from "~/components/pb/dashboard-shell"
import KanbanBoard from "~/components/pb/applications-kanban"
import { getServerAuthSession } from "~/server/auth"

export default async function DashboardApplications() {
  const session = await getServerAuthSession() 
    

  return (
    <div className="flex">
        <DashboardShell  />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium">Resume</h1>                                    
            </div>                              
            {/* Render based on session condition */}
            {session ? (
                <div>
                  <KanbanBoard />
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </main>
    </div>
)
}