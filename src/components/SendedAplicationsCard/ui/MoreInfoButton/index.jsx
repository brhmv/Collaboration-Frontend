import React from 'react'

import PrimaryButton from "@/components/PrimaryButton/index"
export const MoreInfoButton = ({ onClick, children = 'Ətraflı', ...props }) => {
    return (
        <PrimaryButton onClick={onClick} {...props} className="w-full">
            {children}
        </PrimaryButton>
    )
}


