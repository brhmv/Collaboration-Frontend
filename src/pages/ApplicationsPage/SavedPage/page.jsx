import React from 'react'
import Card from '@/components/Home/Card/index'
import photo from '@/assets/images/risImage.png'
import background from '@/assets/images/card-image.png'
import { SavedCardsContent } from './data/mock__data'
import MotionContainer from '../../../animations/MotionContainer'
import MotionItem from '../../../animations/MotionItem'
import { motion } from "framer-motion"
function SavedPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            className='flex flex-col justify-center items-center'>
            <MotionContainer>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
                    {
                        SavedCardsContent && SavedCardsContent.map((item) => (
                            <MotionItem >
                                <Card
                                    key={item.id}
                                    bgImg={background} // temporary
                                    profilePhoto={photo} // temporary
                                    type={item.type}
                                    title={item.title}
                                    topicDescription={item.topicDescription}
                                    name={item.name}
                                    job={item.job}
                                    date={item.date}
                                    participantCount={item.participantCount}
                                    totalParticipants={item.totalParticipants}
                                    percentage={item.percentage}
                                />
                            </MotionItem>
                        ))
                    }
                </div>
            </MotionContainer>
        </motion.div>
    )
}

export default SavedPage
