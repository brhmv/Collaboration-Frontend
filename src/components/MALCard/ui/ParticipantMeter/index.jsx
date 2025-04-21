import React from 'react';

const ParticipantMeter = ({ percentage, participantCount, totalParticipants }) => {
    const size = 42;
    const strokeWidth = 3;
    const radius = size / 2 - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className='flex items-center gap-[clamp(3px,1vw,6px)]'>
            <div style={{ position: "relative", width: `${size}px`, height: `${size}px` }}>
                <svg width={size} height={size}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#0D1B4D"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />

                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#FF4400"
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                </svg>
                <div
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-turing text-[clamp(6px,1vw,12px)] font-[500]'>
                    {percentage}%
                </div>
            </div>
            <p className='flex items-center flex-col text-black text-[clamp(8px,1.5vw,14px)] font-[500]'>
                İştirakçı sayı <br />
                <span className='text-orange-turing'>{participantCount}/{totalParticipants}</span>
            </p>
        </div>
    );
};

export default ParticipantMeter;