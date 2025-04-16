import React from 'react'
import ApplicationStatus from "@/components/ApplicationStatus/index"
function CardMain({ applicationStatus, title, topicDescription, profilePhoto, type, name, job, percentage, participantCount, totalParticipants, date }) {
    const size = 40;
    const strokeWidth = 4;
    const radius = size / 2 - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return (
        <div className="cardMain">
            <div className="description-main">
                <div className="topic">{title}</div>
                <div className="topicDescription">{topicDescription}</div>
            </div>
            <div className="ProfileParticipants">
                <div className="profile-main">
                    <div className="img">
                        <img src={profilePhoto} alt="Profile Photo" />
                    </div>
                    <div className="profileDescription">
                        <div className="nameJob">
                            <p className='name'>{name}</p>
                            {type === "mentorium" && <p className="jobTitile">{job}</p>}
                        </div>


                        {type === "mentorium" && (
                            <div className="participants">
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
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {percentage}%
                                    </div>
                                </div>
                                <p className='number-participants'>İştirakçı sayı <br /> <span>{participantCount}/{totalParticipants}</span> </p>
                            </div>
                        )}




                    </div>


                </div>
                <div className='flex items-center gap-[clamp(4px,1vw,8px)]'>
                    <div className="deadline">
                        <p>Son müraciət tarixi: {date}</p>
                    </div>
                    <ApplicationStatus variant={applicationStatus} />
                </div>
            </div>
        </div>
    )
}

export default CardMain
