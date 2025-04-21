import React from 'react'
import MALCard from '@/components/MALCard/container'

const cardData = {
    type: "mentorium", // or "project"
    bgImg: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "React Development",
    topicDescription: "Learn React development with practical examples and mentorship",
    profilePhoto: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    name: "John Doe",
    job: "Senior React Developer",
    date: "25.05.2025",
    participantCount: 8,
    totalParticipants: 10,
    percentage: 80
};
function CreateMentoriumPage() {
    return (
        <div>
            <MALCard type={cardData.type}>
                <MALCard.Header
                    bgImg={cardData.bgImg}
                    type={cardData.type}
                />
                <MALCard.Main>
                    <MALCard.Main.Description
                        title={cardData.title}
                        topicDescription={cardData.topicDescription}
                    />
                    <MALCard.Main.Profile
                        profilePhoto={cardData.profilePhoto}
                        name={cardData.name}
                        job={cardData.job}
                        date={cardData.date}
                        type={cardData.type}
                        participantCount={cardData.participantCount}
                        totalParticipants={cardData.totalParticipants}
                        percentage={cardData.percentage}
                    />
                </MALCard.Main>
                <MALCard.Footer type={cardData.type} >
                    {cardData.type === 'project' ? (
                        <>
                            <MALCard.Footer.DetailsButton />
                            <MALCard.Footer.ApplyButton />
                        </>
                    ) : (
                        <MALCard.Footer.ApplyButton />
                    )}
                </MALCard.Footer>
            </MALCard>
        </div>
    )
}

export default CreateMentoriumPage
