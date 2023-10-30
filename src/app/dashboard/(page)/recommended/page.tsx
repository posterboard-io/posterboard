import { DashboardShell } from '~/components/pb/dashboard-shell'
import Link from 'next/link'

export default function RecommendedJobs() {
    return (
        <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">Recommended Roles</h1>
                    <p className="text-muted-foreground">
                      We recommend these roles based on your profile.{" "}
                        <Link href="/dashboard/settings" className="hover:underline">
                            Need to change something?
                        </Link>
                    </p>                    
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <UserNav /> */}
                  </div>
                </div>
                {/* <DataTable data={tasks} columns={columns} /> */}
                
              </div>                                  
            </div>                
        </main>
      </div>
    )
}