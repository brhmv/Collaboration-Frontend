
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

export default function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="addNew">
                    <div className="mentorium">
                        <p>Mentorium yarat</p>
                        <div className='plus-icon-mentorium'>
                            <GoPlus />
                        </div>
                    </div>
                    <div className="project">
                        <p>Layihə yarat</p>
                        <div className='plus-icon-project'>
                            <GoPlus />
                        </div>
                    </div>
                </div>
                <div className="search">
                    <input type="button" placeholder='Layihə və mentorium axtar' />
                    <div className="btn-dropdown">
                        <div className="dropdown" onClick={toggleDropdown}>
                            <p>Bütün <IoMdArrowDropdown /></p>
                            {dropdownVisible && (
                                <ul>
                                    <li>Bütün</li>
                                    <li>Layihələr</li>
                                    <li>Mentoriumlar</li>
                                </ul>
                            )}
                        </div>
                        <div className="search-icon">
                            <CiSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
