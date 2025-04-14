// components/SendedApplicationsCard/CardFooter.jsx
import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export const CardFooter = ({ children }) => {
    return (
        <div className='flex  gap-[clamp(8px,3vw,12px)] w-full justify-between items-center'>
            {children}
        </div>
    );
};
