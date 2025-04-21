import React from 'react';
import ParticipantMeter from '../ParticipantMeter';
import ApplicationStatus from "@/components/ApplicationStatus/index"
const CardProfile = ({
    profilePhoto,
    name,
    job,
    date,
    type,
    participantCount,
    totalParticipants,
    percentage,
    applicationStatus
}) => {
    return (
        <div className='flex flex-col gap-[clamp(7px,1vh,10px)] min-w-max'>
            <div className="flex items-center justify-between">
                <div className='flex items-center justify-between w-max gap-[clamp(3px,1vw,6px)]'>
                    <img
                        src={profilePhoto}
                        alt="Profile Photo"
                        className='rounded-full size-[clamp(28px,3vw,42px)] object-cover'
                    />
                    <div className='flex flex-col justify-center max-h-[clamp(30px,4vw,42px)] overflow-hidden leading-tight'>
                        <h3 className='text-[clamp(18px,3vw,20px)] text-black font-[450] lg:leading-[1.2]'>{name}</h3>
                        {type === "mentorium" && (
                            <p className="text-[clamp(13px,2vw,15px)] text-gray-400 font-[450] lg:leading-[1.2]">
                                {job}
                            </p>
                        )}
                    </div>
                </div>
                {type === "mentorium" && (
                    <ParticipantMeter
                        percentage={percentage}
                        participantCount={participantCount}
                        totalParticipants={totalParticipants}
                    />
                )}

            </div>

            <div className='flex items-center w-max gap-[clamp(4px,0.5vw,8px)]'>
                <p
                    className="text-[clamp(6px,1vw,12px)] 
                    font-[400] w-max custom-border rounded-[8px] 
                    px-[clamp(10px,2vw,19px)] py-[clamp(5px,1vh,10px)]">
                    Son müraciət tarixi: {date}
                </p>
                < ApplicationStatus variant={applicationStatus} />
            </div>
        </div>
    );
};

export default CardProfile;