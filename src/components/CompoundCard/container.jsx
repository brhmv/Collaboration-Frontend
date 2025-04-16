import React from 'react'
import './card.css'

import CardHeader from './ui/CardHeader';
import CardMain from './ui/CardMain';
import CardFooter from './ui/CardFooter';

const CompoundCard = ({ variant, applicationStatus, type, bgImg, title, topicDescription, profilePhoto, name, job, date, participantCount, totalParticipants, percentage }) => {




    return (
        <div className={`${type === 'mentorium' ? "mentoriumCard" : "projectCard"}`}>
            <div className="container">
                <CardHeader type={type} bgImg={bgImg} />
                <CardMain
                    title={title}
                    topicDescription={topicDescription}
                    profilePhoto={profilePhoto}
                    type={type}
                    name={name}
                    job={job}
                    percentage={percentage}
                    participantCount={participantCount}
                    totalParticipants={totalParticipants}
                    date={date}
                    applicationStatus={applicationStatus} />
                <CardFooter variant={variant} applicationStatus={applicationStatus} />
            </div>
        </div>
    )
}

export default CompoundCard