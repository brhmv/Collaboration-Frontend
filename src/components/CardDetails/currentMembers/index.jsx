import React from 'react'
import currentMembers from './data/currentMembers'
import pp from '../../../assets/images/card-image.png'

const CurrentMembersComponenet = () => {
  return (
    <div className='flex justify-between'>

    {currentMembers.map((member) => (
    <div key={member.id} className='flex flex-col rounded-[8px] border border-(--blue-turing) p-[18px] items-center w-[155px] h-[185px]'>
        <img src={pp} alt="Card Photo" className='w-[83px] h-[83px] rounded-[100px]'/>
        <p className='text-center mt-[10px] text-[16px]'>{member.name}</p>
        <p className='text-center text-[14px]'>{member.role}</p>
    </div>
    ))}



    </div>
  )
}

export default CurrentMembersComponenet