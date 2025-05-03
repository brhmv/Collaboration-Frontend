import React from 'react'
import { useDispatch } from 'react-redux';
import { openShareModal } from '@/redux/slices/shareModalSlice';
import { IoShareSocialOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";
function ShareButton({ customUrl, type, id }) {
    const dispatch = useDispatch();

    const handleShare = () => {
        dispatch(openShareModal({
            url: customUrl || window.location.href,
            contentType: type,
            contentId: id
        }));
    };
    return (
        <button
            className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm"
            onClick={handleShare}
        >
            <IoShareSocialOutline className="text-xl" />
        </button>
    )
}

export default ShareButton
