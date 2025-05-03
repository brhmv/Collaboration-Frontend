import React from 'react'
const TeamRolesComponent = ({ teamRoles }) => {
  return (
    <div className='flex gap-[5px] flex-wrap'>
      {teamRoles.map((item) => (
        <span key={item.id} className='text-[clamp(10px,1.5vw,16px)] py-[clamp(5px,1vh,8px)] px-[clamp(10px,1vw,16px)] bg-[#FFDCCF] rounded-[8px] '>{item.count} {item.role}</span>
      ))}
    </div>

  )
}

export default TeamRolesComponent