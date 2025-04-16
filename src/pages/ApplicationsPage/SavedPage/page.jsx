import React from 'react'
import Card from '@/components/Home/Card/index'
import photo from '@/assets/images/risImage.png'
import background from '@/assets/images/card-image.png'
import { SavedCardsContent } from './data/mock__data'
import TabNavigation from '../../../components/TabNavigation'

function SavedPage() {
    return (
        <div className='flex flex-col justify-center items-center'>


            <div className='grid grid-cols-3 gap-[32px] mt-[70px]'>
                {
                    SavedCardsContent && SavedCardsContent.map((item) => (
                        <Card
                            key={item.id}

                            bgImg={background} //temporary
                            profilePhoto={photo} //temporary
                            type={item.type}
                            title={item.title}
                            topicDescription={item.topicDescription}
                            name={item.name}
                            job={item.job}
                            date={item.date}
                            participantCount={item.participantCount}
                            totalParticipants={item.totalParticipants}
                            percentage={item.percentage}
                        // or
                        // {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default SavedPage
