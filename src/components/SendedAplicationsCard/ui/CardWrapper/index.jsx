import React from 'react';

export const CardWrapper = ({ children }) => {
    return (
        <div className='gap-[clamp(16px,5vw,32px)] flex flex-col p-[clamp(10px,3vw,20px)] border border-blue-turing rounded-[8px]'>
            {children}
        </div>
    );
};
