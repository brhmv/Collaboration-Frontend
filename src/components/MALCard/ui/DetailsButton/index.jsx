import React from 'react'
import SecondaryButton from "@/components/SecondaryButton/index"
import { useNavigate } from 'react-router'
function DetailsButton({ id }) {
    const navigate = useNavigate()
    const go = () => {
        navigate(`/cardDetails/${id}`)
    }
    return (
        <SecondaryButton onClick={go} className=" p-[15px] font-[500] text-[clamp(12px,3vw,18px)]">Ətraflı</SecondaryButton>
    )
}

export default DetailsButton
