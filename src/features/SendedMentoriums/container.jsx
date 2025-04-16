import React from 'react'
import { SendedMentoriumsContent } from './data/mock__data'
import SendedApplicationsCard from '../../components/SendedAplicationsCard/container'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'




function SendedMentoriums() {

    return (
        <MotionContainer>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,7vw,32px)]'>
                {
                    SendedMentoriumsContent && SendedMentoriumsContent.map((item) => {
                        return (
                            <MotionItem>
                                <SendedApplicationsCard key={item.id}>
                                    <SendedApplicationsCard.Header
                                        projectName={item.projectName}
                                        applicationStatus={item.applicationStatus}
                                        date={item.date}
                                        time={item.time} />
                                    <SendedApplicationsCard.Footer>
                                        <SendedApplicationsCard.MoreInfoButton />
                                        {item.applicationStatus === 'accepted' ? (
                                            <SendedApplicationsCard.ConnectionInfo joiningMethod={item.joiningMethod} location={item.location} />
                                        ) : (
                                            <SendedApplicationsCard.CancelButton />
                                        )}
                                    </SendedApplicationsCard.Footer>
                                </SendedApplicationsCard>
                            </MotionItem>

                        )
                    })
                }
            </div>
        </MotionContainer>
    )
}

export default SendedMentoriums
