import React from 'react'
import styles from "./styles/navbar.module.css"
import { Link, useLocation } from 'react-router';
import { navContent } from './data/contents';

function AppealsPageNavbar() {
    const location = useLocation();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {
                    navContent && navContent.map((item) => (
                        <li key={item.id} className={`${styles.list__item} ${location.pathname === item.path ? styles.active : ""}`}>
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
