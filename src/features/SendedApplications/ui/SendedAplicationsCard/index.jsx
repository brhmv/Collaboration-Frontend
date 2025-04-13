import React from 'react'
import ApplicationStatus from '../ApplicationStatus'
import DateAndTime from '@/components/DateAndTime'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
function SendedAplicationsCard({ projectName, applicationStatus, date, time }) {
    return (
        <div className='gap-[clamp(16px,5vw,32px)]  flex flex-col p-[clamp(10px,3vw,20px)] border border-blue-turing rounded-[8px]'>
            <div className=' gap-[clamp(5px,1.5vh,8px)] flex flex-col justify-between '>
                <div className='flex  justify-between gap-[clamp(20px,7vw,32px)]'>
                    <h4 className='text-blue-turing text-[clamp(9px,2vw,16px)] font-[500]'>{projectName}</h4>
                    <ApplicationStatus variant={applicationStatus} />
                </div>
                <DateAndTime date={date} time={time} />
            </div>
            <div className='flex gap-[clamp(8px,3vw,12px)] flex-col md:flex-row'>
                <PrimaryButton>
                    Ətraflı
                </PrimaryButton>
                {
                    applicationStatus === "pending" ? (

                        <SecondaryButton>
                            İmtina et
                        </SecondaryButton>
                    ) : null
                }
            </div>

        </div>
    )
}
export default SendedAplicationsCard
