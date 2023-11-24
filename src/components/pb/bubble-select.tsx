"use client"

import React, { useState, useEffect } from 'react';
import { TechStack, techStacks } from "~/components/pb/tech-stacks"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import Loading from '~/components/pb/utils/loading';


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
            className={`m-1 px-4 py-2 rounded-full border-2 ${selectedTechs.includes(tech) ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-800 border-gray-300'}`}
          >
            {tech}
          </button>
        ))}
      </div>
      {selectedTechs.length > 0 && <div className="mt-4 text-lg text-center">You&apos;ve Selected: {selectedTechs.join(', ')}</div>}
    </div>
  );
}
