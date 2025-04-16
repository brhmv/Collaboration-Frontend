import React from 'react'
import TabNavigation from '../../../components/TabNavigation'
import IncomingMentoriums from '../../../features/IncomingMentoriums/container'
import { useSelector } from 'react-redux';
import { selectActiveTab } from '@/redux/slices/tabSlice/index'
import SendedMentoriums from '../../../features/SendedMentoriums/container';
import { motion } from 'framer-motion'
const TabNavigationContent = [
    {
        id: 0,
        text: "Gələn müraciətlər"
    },
    {
        id: 1,
        text: "Göndərilən müraciətlər"
    },
]
function MentoriumsPage() {
    const activeTab = useSelector(selectActiveTab);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center">
            <TabNavigation tabs={TabNavigationContent} />
            {
                activeTab == 0 ? (
                    <IncomingMentoriums />
                ) : (
                    <SendedMentoriums />
                )
            }
        </motion.div>
    )
}

export default MentoriumsPage
