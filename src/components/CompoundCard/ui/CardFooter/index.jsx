import React from 'react'
import SecondaryButton from '@/components/SecondaryButton/index'
import PrimaryButton from '@/components/PrimaryButton/index'

function CardFooter({ variant, applicationStatus }) {
    let secondaryButton = null
    let primaryButton = null

    if (variant === "project") {
        secondaryButton = (
            <SecondaryButton className="text-[clamp(12px, 3vw,18px)] p-[clamp(10px,2vw,18px)] text-blue-turing ">
                Ətraflı
            </SecondaryButton>
        )
        primaryButton = (
            <PrimaryButton className="text-[clamp(12px, 3vw,18px)] text-white p-[clamp(10px,2vw,18px)] ">
                Müraciət et
            </PrimaryButton>
        )
    } else if (variant === "mentorium") {
        primaryButton = (
            <PrimaryButton className="text-[clamp(12px, 3vw,18px)] text-white p-[clamp(10px,2vw,18px)] ">
                Müraciət et
            </PrimaryButton>
        )
    } else if (variant === "application") {
        const label = applicationStatus === "rejected" ? "İmtina səbəbi" : "Ətraflı";

        secondaryButton = (
            <SecondaryButton className="text-[clamp(12px, 3vw,18px)] p-[clamp(10px,2vw,18px)] text-blue-turing">
                {label}
            </SecondaryButton>
        )
    }

    return (
        <div className="flex justify-between gap-[9px]">
            {secondaryButton}
            {primaryButton}
        </div>
    )
}

export default CardFooter
