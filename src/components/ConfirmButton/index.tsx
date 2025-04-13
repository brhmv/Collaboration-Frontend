import React from 'react'
import { FiCheck } from "react-icons/fi";

function ConfirmButton() {
    return (
        <button className="flex items-center justify-center p-[8px] rounded-[8px]  bg-green-500">
            <FiCheck className='text-white  text-[17px]' />
        </button>
    )
}

export default ConfirmButton