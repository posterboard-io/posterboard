import { CardContent, Card } from "~/components/ui/card"


export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <div aria-grabbed="false" className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
        <h2 className="font-bold text-xl mb-4">Saved</h2>
        
        
      </div>
      <div aria-grabbed="false" className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
        <h2 className="font-bold text-xl mb-4">Applied</h2>
       
      </div>
      <div aria-grabbed="false" className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
        <h2 className="font-bold text-xl mb-4">Received Response</h2>
        
      </div>
      <div aria-grabbed="false" className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
        <h2 className="font-bold text-xl mb-4">Interviewing</h2>
        
      </div>
      <div aria-grabbed="false" className="flex flex-col bg-gray-200 dark:bg-gray-800 rounded-lg p-4" draggable="true">
        <h2 className="font-bold text-xl mb-4">Pending Offer</h2>
        
      </div>
    </div>
  )
}