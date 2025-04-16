import React from 'react'
import photo from '@/assets/images/risImage.png'
import background from '@/assets/images/card-image.png'
import { ParticipatedInCardsContent } from './data/mock__data'
import CompoundCard from '../../components/CompoundCard/container'
function ParticipatedIn() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
            {
                ParticipatedInCardsContent && ParticipatedInCardsContent.map((item) => (
                    <CompoundCard
                        key={item.id}

                        bgImg={background} //temporary
                        profilePhoto={photo} //temporary


                        {...item}
                    />
                ))
            }

        </div>
    )
}

export default ParticipatedIn
