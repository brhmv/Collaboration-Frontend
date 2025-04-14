// components/SendedApplicationsCard/CardHeader.jsx
import React from 'react';
import ApplicationStatus from '@/components/ApplicationStatus';
import DateAndTime from '@/components/DateAndTime';

export const CardHeader = ({ projectName, applicationStatus, date, time }) => {
    return (
        <div className='gap-[clamp(5px,1.5vh,8px)] flex flex-col justify-between'>
            <div className='flex justify-between gap-[clamp(20px,7vw,32px)]'>
                <h4 className='text-blue-turing text-[clamp(9px,2vw,16px)] font-[500]'>
                    {projectName}
                </h4>
                <ApplicationStatus variant={applicationStatus} />
            </div>
            <DateAndTime date={date} time={time} />
        </div>
    );
};
