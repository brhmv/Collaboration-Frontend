import React from 'react'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'

function SaveButton({ saved }) {
    return (
        <>
            {saved ? (
                <button className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm">
                    <IoBookmark className="text-xl" />
                </button>
            ) : (
                <button className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm">
                    <IoBookmarkOutline className="text-xl" />
                </button>
            )}
        </>

    )
}

export default SaveButton
