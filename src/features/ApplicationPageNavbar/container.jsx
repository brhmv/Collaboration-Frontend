import React from 'react'
import { Link, useLocation } from 'react-router';
import { navContent } from './data/contents';

function AppealsPageNavbar() {
    const location = useLocation();

    return (
        <nav className="flex justify-center items-center mt-[clamp(45px,5vh,70px)]">
            <ul className="flex justify-center items-center text-blue-turing font-medium text-[clamp(10px,1.5vw,18px)] gap-[clamp(20px,3vw,32px)]">
                {
                    navContent && navContent.map((item) => (
                        <li
                            key={item.id}
                            className={`font-[500] py-[10px] ${location.pathname === item.path ? "border-b-[2px] border-blue-turing" : ""}`}
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