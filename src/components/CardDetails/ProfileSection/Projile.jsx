import './Projile.css'
import image from '../../../assets/images/risImage.png'
import { IoShareSocialOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";


export default function Profile () {
    return(
        <div className="profile-container">
            <div className="container">
                <div className="details">
                    <p className='project-name'>Restoran idarəetmə sistemi</p>
                    <div className="photo-name">
                        <img src={image} alt="Profile Image" />
                        <p className='user-name'>Murad Fərəczadə</p>
                    </div>
                    <div className="date">
                        <p className='application-date'>Son müraciət tarixi: 01.04.2025 </p>
                    </div>
                </div>
                <div className="profile-icons">
                    <div className="share-icon">
                        <IoShareSocialOutline />
                    </div>
                    <div className="save-icon">
                        <GoBookmark />
                    </div>
                </div>
            </div>
        </div>
    )
};