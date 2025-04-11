import React from 'react'
import { VscChromeClose } from "react-icons/vsc";


function RejectButton() {
    return (
        <button className="flex items-center justify-center p-[8px] rounded-[8px] bg-red">
            <VscChromeClose className='text-white  text-[17px]' />
        </button>
    )
}

export default RejectButton