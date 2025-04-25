
import { Link } from 'react-router';
import logo from '../../../assets/images/NavbarLogo.png'
import { CiCircleInfo } from "react-icons/ci";


export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/createMentorium" className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <Link to="/createProject" className="controlPanel">
                <p>Idarə paneli</p>
                <div className="controlPanel-icon">
                    <CiCircleInfo />
                </div>
            </Link>
        </div>
    )
}

