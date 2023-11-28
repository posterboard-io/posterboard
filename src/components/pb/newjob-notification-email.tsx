

export interface NewJobsForYouProps {
  firstName: string;
  userEmail: string;
  recommendedJobs: RecommendedJobsProps[]
}

export interface RecommendedJobsProps {
  jobName: string;
  jobID: string;
  jobURL: string;
}

export const newJobsForYouTemplate: React.FC<Readonly<NewJobsForYouProps>> = ({
  firstName, userEmail, recommendedJobs
}) => (
  <div>
    <h1>
      Hey, {firstName}!
    </h1>
    <p>
      We found some jobs we think you would be a great fit for. Go out there and apply!
    </p>
    <div>
      {recommendedJobs.map((job =>
        <ul>
          <li key={job.jobID}>
            {job.jobName}            
            <a href={job.jobURL}>
              Link
            </a>
          </li>
        </ul>
      ))}
    </div>
  </div>
)
