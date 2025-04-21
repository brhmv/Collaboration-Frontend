import React from 'react'
import MotionContainer from '../../../animations/MotionContainer'
import MotionItem from '../../../animations/MotionItem'
import MALCard from '../../../components/MALCard/container'
import { useGetSavedCardsQuery } from '../../../redux/slices/savedCardsSlice'

function SavedPage() {
    const {
        data: SavedCards,
    } = useGetSavedCardsQuery();
    return (
        <div className='flex flex-col justify-center items-center'>
            <MotionContainer>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
                    {
                        SavedCards && SavedCards.map((card) => (
                            <MotionItem key={card.id}>
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
                                        {card.type === 'project' ? (
                                            <div className='flex gap-[clamp(12px,2vw,16px)]'>
                                                <MALCard.Footer.DetailsButton />
                                                <MALCard.Footer.ApplyButton />
                                            </div>
                                        ) : (
                                            <MALCard.Footer.ApplyButton />
                                        )}
                                    </MALCard.Footer>
                                </MALCard>
                            </MotionItem>
                        ))
                    }
                </div>
            </MotionContainer>
        </div>
    )
}

export default SavedPage
