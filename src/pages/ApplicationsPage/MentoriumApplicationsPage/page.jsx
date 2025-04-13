import React from 'react'
import TabNavigation from '../../../components/TabNavigation'
import IncomingMentoriums from '../../../features/IncomingMentoriums/container'
import { useSelector } from 'react-redux';
import { selectActiveTab } from '@/redux/slices/tabSlice/index'
import SendedMentoriums from '../../../features/SendedMentoriums/container';
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
        <div className="flex flex-col justify-center items-center">
            <TabNavigation tabs={TabNavigationContent} />
            {
                activeTab == 0 ? (
                    <IncomingMentoriums />
                ) : (
                    <SendedMentoriums />
                )
            }
        </div>
    )
}

export default MentoriumsPage
