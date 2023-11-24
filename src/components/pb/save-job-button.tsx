"use client"

import React, { useState } from 'react';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';
import { api } from "~/trpc/react";
import { Button } from '~/components/ui/button';
import { useToast } from '~/components/ui/use-toast'

export default function SaveJobButton({ jobId, isInitiallySaved }: { jobId: number, isInitiallySaved: boolean }) {

  const { toast } = useToast()

  const [isSaved, setIsSaved] = useState(isInitiallySaved);

  const saveJobMutation = api.jobs.saveJob.useMutation({
    onSuccess: () => {
      toast({ title: "Application Saved ✅" });
      setIsSaved(true); // Set to saved on success
    },
    onError: () => toast({ title: "Error Saving Application" })
  });

  const unsaveJobMutation = api.jobs.removeJob.useMutation({
    onSuccess: () => {
      toast({ title: "Application Removed" });
      setIsSaved(false); // Set to not saved on success
    },
    onError: () => toast({ title: "Error Removing Application" })
  });

  const toggleSave = () => {

    if (isSaved) {
      unsaveJobMutation.mutate({ jobId: jobId });
    } else {
      saveJobMutation.mutate({ jobId: jobId });
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleSave}
      className={`flex items-center ${isSaved ? 'text-red-500' : 'text-black dark:text-white'}`}
      disabled={saveJobMutation.isLoading || unsaveJobMutation.isLoading}
    >            
      {isSaved ? (
        <div className="flex flex-row">
          <BookmarkFilledIcon className="mr-2 h-4 w-4 transition-transform transform-gpu scale-100" />
          Saved Application          
        </div>
      ) : (
        <div className="flex flex-row">
          <BookmarkIcon className="mr-2 h-4 w-4" />
          Save Application          
        </div>
      )}
      
    </Button>
  );
}
