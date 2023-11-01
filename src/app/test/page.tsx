import JobsCardTwo from "~/components/pb/job-card-two"

export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            <div className="flex flex-col py-4 px-4">
                <JobsCardTwo 
                    jobTitle="Software Engineer"
                    company="Google"
                    locationCity="Mountain View"
                    locationState="CA"
                    locationCountry="USA"
                    jobTeam="Google Cloud"
                    salaryLow="100,000"
                    salaryHigh="200,000"
                    salaryRange="USD"
                    jobLink="https://google.com"
                    jobImage=""
                    someDate="2021-10-01"
                />
            </div>
        </div>
    )
}