import './Navbar.css'
import logo from '../../../assets/images/NavbarLogo.png'
import { CiCircleInfo } from "react-icons/ci";


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="controlPanel">
                <p>Idarə paneli</p>
                <div className="controlPanel-icon">
                    <CiCircleInfo />
                </div>
            </div>
        </div>
    )
}

