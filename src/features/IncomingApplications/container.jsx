import React from 'react';
import IncomingProjectApplicationCard from './ui/IncomingApplicationCard';
import { IncomingProjectApplicationContent } from './data/mock__data';

function IncomingProjectApplications() {
    return (
        <ul className="grid gap-[clamp(16px,5vw,32px)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {
                IncomingProjectApplicationContent && IncomingProjectApplicationContent.map((item) => (
                    <div className="" key={item.id}>
                        <IncomingProjectApplicationCard {...item} />
                    </div>
                ))
            }
        </ul>
    );
}

export default IncomingProjectApplications;