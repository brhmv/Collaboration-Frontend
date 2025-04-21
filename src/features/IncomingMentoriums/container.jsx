import React from 'react'


import IncomingApplicationCard from '../../components/IncomingApplicationCard'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'
import { useGetIncomingMentoriumApplicationCardsQuery } from '../../redux/slices/incomingMentoriumApplicationCardsSlice'


function IncomingMentoriums() {
    const {
        data: IncomingMentoriumApplicationCards,
    } = useGetIncomingMentoriumApplicationCardsQuery();
    return (
        <MotionContainer>
            <div
                className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    IncomingMentoriumApplicationCards && IncomingMentoriumApplicationCards.map((card) => (
                        <MotionItem key={card.id}>
                            <div>
                                <IncomingApplicationCard {...card} />
                            </div>
                        </MotionItem>
                    ))
                }
            </div>
        </MotionContainer>

    )
}

export default IncomingMentoriums
