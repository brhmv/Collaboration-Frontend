import React, { useState, useEffect } from 'react';

import { IncomingProjectApplicationContent } from './data/mock__data';
import IncomingApplicationCard from '../../components/IncomingApplicationCard';
import SkeletonIncomingApplicationCard from '../../components/SkeletonIncomingApplicationCard';

function IncomingApplications() {
    const [isLoading, setIsLoading] = useState(true);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchApplications = async () => {
            try {
                // In a real app, you would fetch from an API here
                // const response = await fetch('/api/applications');
                // const data = await response.json();

                // Using mock data instead
                setApplications(IncomingProjectApplicationContent);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching applications:', error);
                setIsLoading(false);
            }
        };

        fetchApplications();
    }, []);

    return (
        <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gr">
            {isLoading ? (
                // Show skeleton cards while loading
                <>
                    {[...Array(6)].map((_, index) => (
                        <div className="" key={`skeleton-${index}`}>
                            <SkeletonIncomingApplicationCard />
                        </div>
                    ))}
                </>
            ) : (
                // Show actual content when loaded
                applications.map((item) => (
                    <div className="" key={item.id}>
                        <IncomingApplicationCard {...item} />
                    </div>
                ))
            )}
        </ul>
    );
}

export default IncomingApplications;