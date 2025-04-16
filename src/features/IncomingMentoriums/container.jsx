import React from 'react'

import { IncomingMentoriumApplicationContent } from './data/mock__data'
import IncomingApplicationCard from '../../components/IncomingApplicationCard'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'


function IncomingMentoriums() {

    return (
        <MotionContainer>
            <div
                className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    IncomingMentoriumApplicationContent && IncomingMentoriumApplicationContent.map((card) => (
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
