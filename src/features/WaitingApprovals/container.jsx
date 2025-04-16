import React from 'react'
import photo from '@/assets/images/risImage.png'
import background from '@/assets/images/card-image.png'

import CompoundCard from '../../components/CompoundCard/container'
import { WaitingApprovalCards } from './data/mock__data'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'

function WaitingApprovals() {
    return (
        <MotionContainer>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
                {
                    WaitingApprovalCards && WaitingApprovalCards.map((item) => (
                        <MotionItem key={item.id}>
                            <CompoundCard
                                bgImg={background} //temporary
                                profilePhoto={photo} //temporary


                                {...item}
                            />
                        </MotionItem>
                    ))
                }

            </div>
        </MotionContainer>
    )
}


export default WaitingApprovals
