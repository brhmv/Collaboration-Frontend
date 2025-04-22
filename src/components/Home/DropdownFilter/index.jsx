import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterOption } from '@/redux/slices/searchSlice';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function DropdownFilter() {
    const dispatch = useDispatch();
    const [dropdownVisible, setDropdownVisible] = React.useState(false);
    const { filterOption } = useSelector(state => state.search);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleFilterSelect = (option) => {
        dispatch(setFilterOption(option));
        setDropdownVisible(false);
    };

    return (
        <div className="relative">
            <p
                onClick={toggleDropdown}
                className="flex gap-[2px] items-center justify-center cursor-pointer select-none font-[450] text-[clamp(12px,2vw,16px)]">

                {filterOption}
                {
                    dropdownVisible ? (
                        <IoIosArrowUp />
                    ) : (
                        <IoIosArrowDown />

                    )

                }
            </p>

            {dropdownVisible && (
                <ul className=" absolute mt-[12px] p-2 bg-white rounded-lg shadow-lg  min-w-max z-10 space-y-2 text-sm sm:text-base border border-gray-60">
                    {['Bütün', 'Layihələr', 'Mentoriumlar'].map(option => (
                        <li
                            key={option}
                            onClick={() => handleFilterSelect(option)}
                            className="text-[clamp(12px,3vw,16px)] px-2 py-1 rounded-md hover:bg-[#FFDCCF] hover:border hover:border-[#FFC8B4] hover:font-[500] font-[400] transition-colors duration-200 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownFilter;
