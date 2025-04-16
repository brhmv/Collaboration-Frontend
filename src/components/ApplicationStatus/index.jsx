import React from 'react'
import { cn } from '@/utils/MergeTailwindclasses'

function ApplicationStatus({ variant }) {
    if (variant === "") return null

    return (
        <div className={cn(
            variant === "pending" && "text-orange-10 bg-orange-15",
            variant === "accepted" && "text-green-10 bg-green-15",
            variant === "rejected" && "text-red-10 bg-red-15",
            'font-[400] w-max text-[clamp(7px,2vw,12px)] rounded-[4px] px-[6px] py-[4px]'
        )}>
            {variant === "pending" && "gözlənilir"}
            {variant === "accepted" && "qəbul edildi"}
            {variant === "rejected" && "imtina edildi"}
        </div>
    )
}

export default ApplicationStatus
