import { Skeleton } from "~/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center space-x-4">                
                <Skeleton className="h-24 w-24 rounded-full" />
            <div className="space-y-4">
                <Skeleton className="h-8 w-[300px]" />
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-8 w-[200px]" />
            </div>
            </div>
        </div>
    );
}


