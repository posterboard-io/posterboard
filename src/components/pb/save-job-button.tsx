"use client"

import React, { useState } from 'react';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';
import { api } from "~/trpc/react";
import { Button } from '~/components/ui/button';

export default function SaveJobButton({ jobId, userId }: { jobId: string, userId: string }) {
  const [isSaved, setIsSaved] = useState(false);

  const saveJobMutation = api.jobs.saveJob.useMutation();
  const unsaveJobMutation = api.jobs.removeSavedJob.useMutation();

  
  
  const toggleSave = () => {

    console.log('Toggling save status for:', { jobId, userId });

    if (isSaved) {
      unsaveJobMutation.mutate({ posterboardId: jobId, userId: userId });
    } else {
      saveJobMutation.mutate({ posterboardId: jobId, userId });
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
