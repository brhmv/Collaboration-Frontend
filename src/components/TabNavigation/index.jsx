import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, selectActiveTab } from '@/redux/slices/tabSlice/index';

function TabNavigation({ tabs }) {

    const activeTab = useSelector(selectActiveTab);
    const dispatch = useDispatch();

    const handleTabClick = (tabText) => {
        dispatch(setActiveTab(tabText));
    };

    return (
        <ul className="flex  flex-col md:flex-row items-center  w-max gap-[clamp(18px,3vw,24px)] p-2 px-4 md:rounded-[51px] md:shadow-lg  mt-5 mb-5 md:mt-20 md:mb-20">
            {
                tabs && tabs.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleTabClick(item.id)}
                        className={`whitespace-nowrap rounded-full py-3 md:py-4 px-5 md:px-11 font-medium text-sm md:text-base cursor-pointer transition-all duration-200 w-full text-center ${activeTab === item.id ? "bg-blue-turing text-blue-turing text-white" : "bg-gray-200 text-blue-turing hover:text-white hover:bg-blue-900/50"}`}
                    >
                        {item.text}
                    </li>
                ))
            }
        </ul>
    )
}

export default TabNavigation;