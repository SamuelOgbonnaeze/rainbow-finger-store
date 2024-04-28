import { Skeleton } from "@/components/ui/skeleton"


export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-4 ">
            {/* Images and actions */}
            <div className=" rounded-xl ">
                <Skeleton className="bg-gray-200/50 w-[200px] h-[125px] rounded-xl " />
            </div>

            {/* Description */}
            <div className="space-y-2">
                {/* Name */}
                <Skeleton className="bg-gray-200/50 h-5 w-[200px] " />
                {/* Brand and Category */}
                <div className="flex justify-between">
                    <Skeleton className="bg-gray-200/50 h-4 w-[150px] " />
                    <Skeleton className="bg-gray-200/50 h-4 w-[150px] " />
                </div>
            </div>

            {/* Prices */}
            <Skeleton className="bg-gray-200/50 h-4 w-[200px] " />
        </div>
    )
}



  