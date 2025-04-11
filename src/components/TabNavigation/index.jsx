import React from 'react';

function TabNavigation({ tabs }) {
    const activeTab = "Gələn müraciətlər" //temp
    return (
        <ul className="flex gap-6 p-2 px-4 rounded-full shadow-lg w-max mt-5 mb-5 md:mt-20 md:mb-20">
            {
                tabs && tabs.map((item) => (
                    <li key={item.id} className={`rounded-full py-3 md:py-4 px-5 md:px-11 font-medium text-sm md:text-base cursor-pointer transition-all duration-200 w-max ${activeTab === item.text ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900 hover:text-white hover:bg-blue-900/50"}`}>
                        {item.text}
                    </li>
                ))
            }
        </ul>
    )
}

export default TabNavigation;