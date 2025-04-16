import React from 'react'
import IncomingApplications from '@/features/IncomingApplications/container'
import SendedApplications from '@/features/SendedApplications/container'
import TabNavigation from '@/components/TabNavigation'
import { useSelector } from 'react-redux'
import { selectActiveTab } from '@/redux/slices/tabSlice/index'

import { motion } from 'framer-motion'
const TabNavigationContent = [{ id: 0, text: "Gələn müraciətlər" }, { id: 1, text: "Göndərilən müraciətlər" }]
function ProjectsPage() {

    const activeTab = useSelector(selectActiveTab);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center">
            <TabNavigation tabs={TabNavigationContent} />
            {
                activeTab == 0 ? (
                    <IncomingApplications />
                ) : (
                    <SendedApplications />
                )
            }
        </motion.div>
    )
}

export default ProjectsPage