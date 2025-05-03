import React from 'react';
import SaveButton from '@/components/SaveButton';
import ShareButton from '../../../ShareButton';

const CardHeader = ({ bgImg, type = 'project', saved, id, customUrl }) => {


    return (
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={bgImg} alt="background image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-3 left-0 right-0 flex justify-between items-center px-3 z-20">

                <ShareButton id={id} customUrl={customUrl} />
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