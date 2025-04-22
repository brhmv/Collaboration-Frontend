import React from 'react';
import { useDispatch } from 'react-redux';
import { IoShareSocialOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { openShareModal } from '@/redux/slices/shareModalSlice'; // Adjust path as needed
import SaveButton from '../SaveButton';

const CardHeader = ({ bgImg, type = 'project', saved, id, customUrl }) => {
    const dispatch = useDispatch();

    const handleShare = () => {
        dispatch(openShareModal({
            url: customUrl || window.location.href,
            contentType: type,
            contentId: id
        }));
    };

    return (
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={bgImg} alt="background image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-3 left-0 right-0 flex justify-between items-center px-3 z-20">
                <button
                    className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm"
                    onClick={handleShare}
                >
                    <IoShareSocialOutline className="text-xl" />
                </button>
                <SaveButton saved={saved} />
            </div>

            <div className="absolute bottom-3 left-3 z-20">
                <div className="cursor-pointer px-3 py-1 text-white rounded-lg font-medium text-sm bg-orange-turing">
                    {type === "mentorium" ? "Mentorium" : "Layihə"}
                </div>
            </div>
        </div>
    );
};

export default CardHeader;