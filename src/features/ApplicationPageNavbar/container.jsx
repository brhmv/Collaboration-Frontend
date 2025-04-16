import React from 'react'
import { Link, useLocation } from 'react-router';
import { navContent } from './data/contents';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '@/redux/slices/tabSlice/index';
function AppealsPageNavbar() {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleTabClick = () => {
        dispatch(setActiveTab(0));
    };
    return (
        <nav className="flex justify-center items-center mt-[clamp(45px,5vh,70px)] ">
            <ul className="flex justify-center items-center text-blue-turing font-medium text-[clamp(10px,1.5vw,18px)] gap-[clamp(20px,3vw,32px)]">
                {
                    navContent && navContent.map((item) => (
                        <li
                            onClick={() => handleTabClick()}
                            key={item.id}
                            className={`min-w-max  font-[500] py-[10px] ${location.pathname === item.path ? "border-b-[2px] border-blue-turing text-blue-turing" : "text-gray-10"}`}
                        >
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default AppealsPageNavbar