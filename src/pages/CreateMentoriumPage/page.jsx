import React from 'react'

import CreateMentorium from '../../features/CreateMentorium/container'

function CreateMentoriumPage() {


    return (
        <div className='space-y-[clamp(24px,4vw,30px)] p-[30px]'>
            <div className='space-y-[clamp(5px,2vh,8px)]'>
                <h3 className='text-blue-turing font-medium text-[clamp(26px,6vw,32px)]'>
                    Mentorium yarat
                </h3>
                <i className='text-[clamp(14px,2vw,18px)] text-gray-20'>
                    Birlikdə daha canlı və ilhamverici bir atmosfer quraq!
                </i>
            </div>

            <CreateMentorium />
        </div>
    )
}

export default CreateMentoriumPage