import React from 'react'
import SendedApplicationsCard from '../../components/SendedAplicationsCard/container'
import MotionContainer from '../../animations/MotionContainer'
import MotionItem from '../../animations/MotionItem'
import { useGetSendedProjectApplicationCardsQuery } from '../../redux/slices/sendedProjectApplicationCardsSlice'


function SendedAplications() {
    const {
        data: SendedProjectApplicationCards,
    } = useGetSendedProjectApplicationCardsQuery();
    return (
        <MotionContainer>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(20px,7vw,32px)] '>
                {
                    SendedProjectApplicationCards && SendedProjectApplicationCards.map((item) => {
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
                                        {item.applicationStatus === 'accepted' && (
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


export default SendedAplications