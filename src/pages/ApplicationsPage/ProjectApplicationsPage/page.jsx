import React from 'react'
import IncomingProjectApplications from '@/features/IncomingApplications/container'
import SendedApplications from '@/features/SendedApplications/container'
import TabNavigation from '@/components/TabNavigation'
const TabNavigationContent = [
    {
        id: 0,
        text: "Gələn müraciətlər",

    },
    {
        id: 1,
        text: "Göndərilən müraciətlər",

    },
]
function ProjectsPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center ", alignItems: "center" }}>
            <TabNavigation tabs={TabNavigationContent} />
            <IncomingProjectApplications />
            <SendedApplications />
        </div>
    )
}

export default ProjectsPage
