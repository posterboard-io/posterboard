import { DashboardShell } from '~/components/pb/dashboard-shell'
import Link from 'next/link'

export default function RecommendedJobs() {

    const didUserCompleteOnboarding = true;

    return (
        <div className="flex">
        <DashboardShell />
        <main className="flex-grow p-6">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-4">
                  <h1 className="text-lg font-medium">Recommended</h1>
                  {/* Something Else here if we want */}
              </div>
              {didUserCompleteOnboarding ? (
                <div className="flex flex-col space-y-2 px-4">
                  <p>You have completed onboarding </p>  
                  <p> Heres your reocommeneded feed</p>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 px-4">
                  <p>You havent completed onboarding </p>
                </div>
              )}                          
            </div>
        </main>
      </div>
    )
}