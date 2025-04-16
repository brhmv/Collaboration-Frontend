import React from 'react'
import './card.css'
import { IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

const index = ({type,bgImg,title,topicDescription,profilePhoto,name,job,date,participantCount,totalParticipants,percentage}) => {


  const size = 40;
  const strokeWidth = 4;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`${type === 'mentorium' ? "mentoriumCard" : "projectCard"}`}>
        <div className="container">
            <div className="cardHeader">
                <div className="bgImg">
                  <img src={bgImg} alt="background image" />
                </div>
                <div className="icons">
                  <div className="share"><IoShareSocialOutline /></div>
                  <div className="bookmark"><IoBookmarkOutline /></div>
                </div>
                <div className="cardName">
                  <p className='cardType'>{type === "mentorium" ? "Mentorium" : "Layihə"}</p>
                </div>
            </div>
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

                <div className="deadline">
                  <p>Son müraciət tarixi: {date}</p>
                </div>
              </div>
            </div>
            <div className={`cardFooter ${type}`}>
              {type === 'project' ? (
                <div className="project">
                  <button className="detailed">Ətraflı</button>
                  <button className="apply">Müraciət et</button>
                </div>
              ) : (
                  <div className="mentorium">
                    <button className="apply">Müraciət et</button>
                  </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default index