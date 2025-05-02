import React from 'react'
import teamRoles from './data/teamRoles'

const TeamRolesComponent = () => {
  return (
    <div className='flex gap-[5px] flex-wrap'>
        {teamRoles.map((item) => (
        <span key={item.id} className='py-[8px] px-[16px] bg-(--orange-10) rounded-[8px] text-[16px]'>{item.count} {item.role}</span>
        ))}
    </div>

  )
}

export default TeamRolesComponent