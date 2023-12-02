"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import JobDetails from '~/components/pb/job-details'; // Update the path as needed
import Loading from '~/components/pb/utils/loading'; // Your Loading component
import ErrorPage from '~/components/pb/utils/error-page'; // Your Error component

const JobDetailPage = () => {
  const searchParams = useSearchParams()
 
  const jobExternalId = searchParams.get('jobExternalId')

  if (!jobExternalId || Array.isArray(jobExternalId)) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <JobDetails jobExternalId={jobExternalId} />
    </div>
  )
};

export default JobDetailPage;
