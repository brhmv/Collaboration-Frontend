import React from 'react';
import { IoShareSocialOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const CardHeader = ({ bgImg, type = 'project', saved }) => {
    return (
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={bgImg} alt="background image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-3 left-0 right-0 flex justify-between items-center px-3 z-20">
                <button className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm">
                    <IoShareSocialOutline className="text-xl" />
                </button>
                {saved ? (
                    <button className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm">
                        <IoBookmark className="text-xl" />
                    </button>
                ) : (
                    <button className="cursor-pointer text-[#000D26] bg-white rounded-full p-2 shadow-sm">
                        <IoBookmarkOutline className="text-xl" />
                    </button>
                )}
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