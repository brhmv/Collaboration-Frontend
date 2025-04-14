import React from 'react'
import locationIcon from '@/assets/icons/location.svg';

export function ConnectionInfo({ joiningMethod, location }) {
    let content;

    if (joiningMethod === "online") {
        content = (
            <div className='text-center min-w-[50%] font-[450] text-green-10 text-[clamp(6px,2vw,12px)]'>
                Zoom linki e-mailə göndərildi
            </div>
        );
    } else {
        content = (
            <div className='w-[50%] justify-center flex items-center font-[450] text-green-10 text-[clamp(6px,2vw,12px)]'>
                <img src={locationIcon} alt="location icon green" className='mr-1' />
                {location}
            </div>
        );
    }

    return content;
}
