"use client"

import React, { useState, useEffect } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  useSortable,
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface JobApplication {
  id: string;
  title: string;
  company: string;
}

interface Column {
  id: string;
  name: string;
  items: JobApplication[];
}

const initialColumns: Column[] = [
  {
    id: 'saved',
    name: 'Saved',
    items: [
      { id: 'job-1', title: 'Frontend Developer', company: 'Tech Corp' },
      { id: 'job-2', title: 'UX Designer', company: 'Design Studio' },
    ],
  },
  {
    id: 'applied',
    name: 'Applied',
    items: [],
  },
  {
    id: 'interview',
    name: 'Upcoming Interview',
    items: [],
  },
  {
    id: 'offer',
    name: 'Pending Offer Review',
    items: [],
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Use default options
    }),
  );

  const findColumn = (id: string) => {
    return columns.find(column => column.items.some(item => item.id === id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    // Assert that `event.active.id` is a string
    setActiveId(event.active.id as string);
  };

    const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Reset activeId regardless of whether the drop succeeds
    setActiveId(null);

    // If no target is found or if the item is dropped on itself, abort the operation
    if (!over || active.id === over.id) {
        return;
    }

    // Get the ids as strings
    const activeId = active.id as string;
    const overId = over.id as string;

    // Find the source column and item index
    const fromColumn = findColumn(activeId);
    const activeItemIndex = fromColumn?.items.findIndex(item => item.id === activeId);
    if (!fromColumn || activeItemIndex === -1) {
        return; // Item or source column not found, abort the operation
    }

    let toColumn;
    let toIndex = 0; // Default to 0 (beginning of the column)

    if (columns.some(column => column.id === overId)) {
        // Dropped on a column, we'll add to the end of this column
        toColumn = columns.find(column => column.id === overId);
        toIndex = toColumn?.items.length ?? 0; // Place at the end of the column
    } else {
        // Dropped on an item, find the destination column and item index
        toColumn = findColumn(overId);
        toIndex = toColumn?.items.findIndex(item => item.id === overId) ?? -1;
        if (toIndex === -1) {
        // If overId is not found, we're adding to the end of the column that contains the overId
        toColumn = columns.find(column => column.items.some(item => item.id === overId));
        toIndex = toColumn?.items.length ?? 0;
        }
    }

    if (!toColumn) {
        return; // Destination column not found, abort the operation
    }

    // Create a new state with the items moved
    const newColumns = columns.map(col => {
        if (col.id === fromColumn.id) {
        // Remove the item from the source column
        const newItems = Array.from(col.items);
        newItems.splice(activeItemIndex!, 1);
        return { ...col, items: newItems };
        } else if (col.id === toColumn!.id) {
        // Add the item to the destination column
        const newItems = Array.from(col.items);
        const [movedItem] = fromColumn.items.slice(activeItemIndex, activeItemIndex! + 1);
        newItems.splice(toIndex, 0, movedItem!);
        return { ...col, items: newItems };
        }
        return col; // For columns that are not affected
    });

    // Update the state with the new columns
    setColumns(newColumns);
    };

  
  

  useEffect(() => {
    console.log('Updated columns:', columns);
  }, [columns]);
  


  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}      
    >
      <div className="flex">
      {columns.map(column => (
        <SortableContext key={column.id} items={column.items.map(item => item.id)} strategy={verticalListSortingStrategy}>
            <div className="bg-gray-100 p-4 w-80 rounded m-2">
            <h2 className="font-bold mb-2">{column.name}</h2>
            {column.items.map(item => (
                <DraggableItem key={item.id} {...item} />
            ))}
            </div>
        </SortableContext>
        ))}

      </div>
      <DragOverlay>
        {activeId ? (
          <div className="bg-blue-500 p-2 rounded shadow cursor-grabbing">
            {findColumn(activeId)?.items.find(item => item.id === activeId)?.title}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export function DraggableItem({ id, title, company }: JobApplication) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-white p-2 rounded mb-2 shadow cursor-pointer">
        {title} at {company}
      </div>
    );
  }
  