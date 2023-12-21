"use client"

import React, { useState, useEffect } from 'react';
import { TechStack, techStacks } from "~/components/pb/tech-stacks"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import Loading from '~/components/pb/utils/loading';
import TechStackImage from '~/components/pb/tech-stack/tech-stack-image';


export default function BubbleSelect() {
  // Update the state to handle an array of selections
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const { data: userTechStack, isLoading } = api.onboarding.getUserTechStack.useQuery();

  const { toast } = useToast()
  
  useEffect(() => {
    if (userTechStack?.onboardingTechStack) {
      setSelectedTechs(userTechStack.onboardingTechStack);
    }
  }, [userTechStack]);

  const updateUserTechStack = api.onboarding.updateUserTechStack.useMutation({
    onSuccess: () => {
      toast({
        title: "Tech Stack Updated ✅",
      })
    }
  })

  const toggleTechSelection = (tech: TechStack) => {
    if (selectedTechs.includes(tech)) {
      // If tech is already selected, remove it from the array
      setSelectedTechs(prevTechs => prevTechs.filter(t => t !== tech));
      updateUserTechStack.mutate({
        techStack: selectedTechs.filter(t => t !== tech)
      })
    } else {
      // If tech is not selected, add it to the array
      setSelectedTechs(prevTechs => [...prevTechs, tech]);
      updateUserTechStack.mutate({
        techStack: [...selectedTechs, tech]
      })
    }
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="">      
      <div className="flex flex-wrap items-center justify-center">
        {techStacks.map((tech) => (
          
          <button
            key={tech}
            onClick={() => toggleTechSelection(tech)}
            className={`m-1 px-4 py-2 rounded-full border-2 ${selectedTechs.includes(tech) ? 'bg-gradient-to-tr from-[#313131] to-[#555555] dark:bg-white text-white shadow-md ' : 'bg-white dark:bg-transparent text-gray-800 shadow-md'}`}
          >
            <TechStackImage techStack={tech} />
          </button>
        ))}
      </div>
      {selectedTechs.length > 0 && <div className="mt-4 text-md text-left">You&apos;ve Selected: {selectedTechs.join(', ')}</div>}
    </div>
  );
}
