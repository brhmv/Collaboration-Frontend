import React from 'react';

import { IncomingProjectApplicationContent } from './data/mock__data';
import IncomingApplicationCard from '../../components/IncomingApplicationCard';

function IncomingApplications() {
    return (
        <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gr">
            {
                IncomingProjectApplicationContent && IncomingProjectApplicationContent.map((item) => (
                    <div className="" key={item.id}>
                        <IncomingApplicationCard {...item} />
                    </div>
                ))
            }
        </ul>
    );
}

export default IncomingApplications;