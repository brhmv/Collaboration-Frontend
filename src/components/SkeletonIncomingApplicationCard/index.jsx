import React from 'react';
import Skeleton from '@/components/Skeleton/index';

function SkeletonIncomingApplicationCard() {
    return (
        <div className="gap-[clamp(20px,4vw,32px)] border min-w-max border-gray-200 flex p-4 md:p-5 rounded-lg h-full items-center justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex gap-1 md:gap-1.5 items-center justify-start h-full">
                    <Skeleton className="w-8 h-8 lg:w-10 lg:h-10 rounded-full" />
                    <div className="flex flex-col h-full text-left justify-center">
                        <Skeleton className="h-5 md:h-6 lg:h-7 w-32 mb-1" />
                        <Skeleton className="h-3 md:h-4 w-24" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-4 md:h-5 lg:h-6 w-40" />
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
                <div className="flex justify-between items-center w-full h-full gap-2 flex-col sm:flex-row">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                </div>
                <div>
                    <Skeleton className="h-8 w-24" />
                </div>
            </div>
        </div>
    );
}

export default SkeletonIncomingApplicationCard;