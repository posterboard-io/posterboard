export default function StatsPage() {
    return (
        <div className="flex flex-col py-4 px-4 min-h-screen">
            <h1>Stats Page</h1>
            <div className="flex flex-col py-4 px-4">
                <h2>Stats</h2>
            </div>            
            <p className="text-gray-500">
                The economy the past few years has been wild. We are publishing statistics on the job market to help you make better decisions.    
                Ideally, we&apos;re going to cover top companies, top cities, top job titles, and top salaries. We&apos;ll also cover the top skills 
                with the data we have scrapped.
            </p>
            <p className="text-gray-500">
                Think of this page being like the &quot;Emergening Markets&quot; section of the Wall Street Journal. 
                We&apos;ll publish new data as we get it and try to center it around trends we see with our data. 
                Like we said, this project is open source, so if you do want to toy with the data we have, 
                by all means, go for it. If you find something cool, let us know and we&apos;ll feature it here.
            </p>
        </div>
    )
}