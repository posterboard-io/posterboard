"use client"

import React, { useState } from 'react';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';
import { api } from "~/trpc/react";
import { Button } from '~/components/ui/button';

export default function SaveJobButton({ jobId }: { jobId: number  }) {
  const [isSaved, setIsSaved] = useState(false);

  const saveJobMutation = api.jobs.saveJob.useMutation();
  const unsaveJobMutation = api.jobs.removeJob.useMutation();

  const toggleSave = () => {

    if (isSaved) {
      unsaveJobMutation.mutate({ jobId: jobId });
    } else {
      saveJobMutation.mutate({ jobId: jobId });
    }
    setIsSaved(!isSaved);
  };

  return (
    <>
        <Button 
        variant="outline" 
        onClick={toggleSave}
        className={`flex items-center ${isSaved ? 'text-red-500' : 'text-black dark:text-white'}`} // Change the color when saved
        disabled={saveJobMutation.isLoading || unsaveJobMutation.isLoading}
        >            
        {isSaved ? (
            <BookmarkFilledIcon className="mr-2 h-4 w-4 transition-transform transform-gpu scale-100" />
        ) : (
            <BookmarkIcon className="mr-2 h-4 w-4" />
        )}
        Save Job
        </Button>
    </>
  );
}
