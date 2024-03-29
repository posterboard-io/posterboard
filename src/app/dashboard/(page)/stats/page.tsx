"use client"

import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import { api } from "~/trpc/react"
import { DashboardGraph } from "~/components/pb/dashboard/dashboard-graph"
import { Card, CardTitle, CardContent, CardHeader } from "~/components/ui/card"
import { TechStackItem, TechCount } from "~/types/types"


export default function StatsPage() {

    const techStackQueryResult = api.jobs.getJobStatsTechStack.useQuery({ })

    let sortedTechCounts: TechCount[] = [];

    if (techStackQueryResult.data) {
        const techStackData: TechStackItem[] = techStackQueryResult.data;    

        const countTechOccurrences = (data: TechStackItem[], techNames: string[]): TechCount[] => {
        // Explicitly define the type of counts
        const counts: Record<string, number> = techNames.reduce((acc, tech) => ({ ...acc, [tech]: 0 }), {});
        
        data.forEach(item => {
            techNames.forEach(tech => {
            if (item.companyTechStack.includes(tech)) {
                counts[tech] += 1;
            }
            });
        });
        
        // Using type assertion to assure TypeScript that 'value' will always be a number
        return Object.keys(counts).map(key => ({ name: key, value: counts[key] as number })).sort((a, b) => (b.value as number) - (a.value as number));
        };
        
        sortedTechCounts = countTechOccurrences(techStackData, [
            "Java", "Python", "C++", "Rust", "Go", "JavaScript", "TypeScript", "SQL", "C#", "Swift"
        ]);            
    }

    

    return (
        <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                      Job Market Statistics
                    </h1>                                      
                  </div>                  
                </div>
                <div className="flex flex-col">
                  <Card className="flex flex-col space-y-2">
                    <CardTitle className="flex flex-col py-2 px-2">
                      {/* Put some text here?  + Add in additional details below? */}
                    </CardTitle>
                    <CardContent className="flex flex-col space-y-2">
                      
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                        <Card className="col-span-4">
                          <CardHeader>
                            <CardTitle>
                                New Jobs Posted By Company
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pl-2">
                            <DashboardGraph />
                          </CardContent>
                        </Card>
                        
                      </div>
                    </CardContent>
                  </Card> 
                </div>                               
              </div>                                  
            </div>                
        </main>
      </div>
    )
}