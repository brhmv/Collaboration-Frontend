import React from 'react'
import SecondaryButton from "@/components/SecondaryButton/index"
export const CancelButton = ({ onClick, children = 'İmtina et', ...props }) => {
    return (
        <SecondaryButton onClick={onClick} {...props} className="w-[50%]">
            {children}
        </SecondaryButton>
    )
}


