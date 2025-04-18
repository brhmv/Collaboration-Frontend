import React from 'react'
import { setFilterOption } from '@/redux/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropdown } from "react-icons/io";
function DropdownFilter() {
    const dispatch = useDispatch();

    const [dropdownVisible, setDropdownVisible] = React.useState(false);
    const { filterOption } = useSelector(state => state.search);
    const dropdownRef = React.useRef(null);
    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Handle filter option selection
    const handleFilterSelect = (option) => {
        dispatch(setFilterOption(option));
        setDropdownVisible(false);
    };


    return (
        <div className="dropdown" ref={dropdownRef}>
            <p onClick={toggleDropdown}>
                {filterOption} <IoMdArrowDropdown />
            </p>
            {dropdownVisible && (
                <ul className="dropdown-list">
                    <li onClick={() => handleFilterSelect('Bütün')}>Bütün</li>
                    <li onClick={() => handleFilterSelect('Layihələr')}>Layihələr</li>
                    <li onClick={() => handleFilterSelect('Mentoriumlar')}>Mentoriumlar</li>
                </ul>
            )}
        </div>
    )
}

export default DropdownFilter
