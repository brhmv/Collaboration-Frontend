import React from 'react'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'
import MALCard from '../../components/MALCard/container'
import { useGetParticipatedInCardsQuery } from '../../redux/slices/ParticipatedInCardsSlice'
function ParticipatedIn() {
    const {
        data: ParticipatedInCards,
    } = useGetParticipatedInCardsQuery();
    return (
        <MotionContainer>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
                {
                    ParticipatedInCards && ParticipatedInCards.map((card) => (
                        <MotionItem key={card.id}>
                            <MotionItem >
                                <MALCard type={card.type}>
                                    <MALCard.Header
                                        bgImg={card.bgImg}
                                        type={card.type}
                                    />
                                    <MALCard.Main>
                                        <MALCard.Main.Description
                                            title={card.title}
                                            topicDescription={card.topicDescription}
                                        />
                                        <MALCard.Main.Profile
                                            profilePhoto={card.profilePhoto}
                                            name={card.name}
                                            job={card.job}
                                            date={card.date}
                                            type={card.type}
                                            participantCount={card.participantCount}
                                            totalParticipants={card.totalParticipants}
                                            percentage={card.percentage}
                                        />
                                    </MALCard.Main>
                                    <MALCard.Footer type={card.type}>

                                        <MALCard.Footer.DetailsButton />


                                    </MALCard.Footer>
                                </MALCard>
                            </MotionItem>
                        </MotionItem>
                    ))
                }

            </div>
        </MotionContainer>
    )
}

export default ParticipatedIn
