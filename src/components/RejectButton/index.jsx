import React from 'react';
import { VscChromeClose } from "react-icons/vsc";

function RejectButton() {
    const handleClick = () => {

    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center justify-center p-[8px] rounded-[8px] bg-red-20"
        >
            <VscChromeClose className='text-white text-[17px]' />
        </button>
    );
}

export default RejectButton;