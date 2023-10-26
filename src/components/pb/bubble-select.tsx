"use client"

import React, { useState } from 'react';
import { TechStack, techStacks} from "~/components/pb/tech-stacks"


export default function BubbleSelect() {
  // Update the state to handle an array of selections
  const [selectedTechs, setSelectedTechs] = useState<TechStack[]>([]);

  const toggleTechSelection = (tech: TechStack) => {
    if (selectedTechs.includes(tech)) {
      // If tech is already selected, remove it from the array
      setSelectedTechs(prevTechs => prevTechs.filter(t => t !== tech));
    } else {
      // If tech is not selected, add it to the array
      setSelectedTechs(prevTechs => [...prevTechs, tech]);
    }
  };

  return (
    <div className="">      
      <div className="flex flex-wrap items-center justify-center">
        {techStacks.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTechSelection(tech)}
            className={`m-1 px-4 py-2 rounded-full border-2 ${selectedTechs.includes(tech) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-800 border-gray-300'}`}
          >
            {tech}
          </button>
        ))}
      </div>
      {selectedTechs.length > 0 && <div className="mt-4 text-lg text-center">{selectedTechs.join(', ')}</div>}
    </div>
  );
}
