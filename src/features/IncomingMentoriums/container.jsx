import React from 'react'

import { IncomingMentoriumApplicationContent } from './data/mock__data'
import IncomingApplicationCard from '../../components/IncomingApplicationCard'

function IncomingMentoriums() {
    return (
        <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {
                IncomingMentoriumApplicationContent && IncomingMentoriumApplicationContent.map((item) => (
                    <div className="" key={item.id}>
                        <IncomingApplicationCard {...item} />
                    </div>
                ))
            }
        </ul>

    )
}

export default IncomingMentoriums
