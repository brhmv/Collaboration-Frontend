import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

import PrimaryButton from "@/components/PrimaryButton/index"
import SecondaryButton from "@/components/SecondaryButton/index"
export default function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="addNew">
                    <PrimaryButton variant="link" to="/createMentorium" className="mentorium">
                        <p>Mentorium yarat</p>
                        <div className='plus-icon-mentorium'>
                            <FiPlus />
                        </div>
                    </PrimaryButton>
                    <SecondaryButton variant="link" to="/createProject" className="project">
                        <p>Layihə yarat</p>
                        <div className='plus-icon-project'>
                            <FiPlus />
                        </div>
                    </SecondaryButton>
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
