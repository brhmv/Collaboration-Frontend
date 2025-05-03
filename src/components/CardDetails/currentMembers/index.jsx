import React from 'react'


const CurrentMembersComponenet = ({ currentMembers }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-[clamp(10px,5vw,20px)]'>
      {currentMembers.map((member) => (
        <div key={member.id} className=' min-w-max  py-[clamp(13px,2vh,18px)] gap-[clamp(14px,2vh,20px)] flex flex-col rounded-[8px] border bg-white border-(--blue-turing)  items-center'>
          <img src={member.imgUrl} alt="Card Photo" className='size-[clamp(40px,7vw,83px)] rounded-[100px]' />
          <div>
            <p className='text-center font-semibold text-[16px]'>{member.name}</p>
            <p className='text-center font-medium text-[14px]'>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CurrentMembersComponenet