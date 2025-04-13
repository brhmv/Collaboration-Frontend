import React from 'react'
import SendedAplicationsCard from './ui/SendedAplicationsCard'
import SendedAplicationsContent from './data/mock__data'


function SendedAplications() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(20px,7vw,32px)] xl:grid-cols-4'>
            {
                SendedAplicationsContent && SendedAplicationsContent.map((item) => {
                    return (

                        <SendedAplicationsCard
                            key={item.id}
                            projectName={item.projectName}
                            applicationStatus={item.applicationStatus}
                            date={item.date}
                            time={item.time} />

                    )
                })
            }
        </div>
    )
}


export default SendedAplications