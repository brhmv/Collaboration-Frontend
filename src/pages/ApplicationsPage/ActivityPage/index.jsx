import React from 'react'
import TabNavigation from '../../../components/TabNavigation'
import { useSelector } from 'react-redux';
import { selectActiveTab } from '@/redux/slices/tabSlice/index'
import MyCreations from '../../../features/MyCreations/container';
import WaitingApprovals from '../../../features/WaitingApprovals/container';
import ParticipatedIn from '../../../features/ParticipatedIn/container';
import { motion } from 'framer-motion';
const TabNavigationContent = [
    {
        id: 0,
        text: "Təsdiq gözləyənlər",
    },
    {
        id: 1,
        text: "Yaratdıqlarım",
    },
    {
        id: 2,
        text: "İştirak ettiklərim",
    },
]
function ActivityPage() {
    const activeTab = useSelector(selectActiveTab);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center">
            <TabNavigation tabs={TabNavigationContent} />
            {
                activeTab == 0 && (
                    <WaitingApprovals />
                )
            }
            {
                activeTab == 1 && (
                    <MyCreations />
                )
            }
            {activeTab == 2 && (
                <ParticipatedIn />
            )
            }
        </motion.div>
    )
}

export default ActivityPage
