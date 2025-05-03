import './Projile.css'
import ShareButton from '../../ShareButton';
import SaveButton from '../../SaveButton';


export default function Profile({ id, customUrl, ownerName, ownerPPImgUrl, deadline }) {
    return (
        <div className="profile-container">
            <div className="container">
                <div className="details">
                    <p className='project-name'>Restoran idarəetmə sistemi</p>
                    <div className="photo-name">
                        <img src={ownerPPImgUrl} alt="Profile Image" />
                        <p className='user-name'>{ownerName}</p>
                    </div>
                    <div className="date">
                        <p className='application-date'>Son müraciət tarixi: {deadline} </p>
                    </div>
                </div>
                <div className="profile-icons">
                    <div className="share-icon">
                        <ShareButton id={id} customUrl={customUrl} />
                    </div>
                    <div className="save-icon">
                        <SaveButton />
                    </div>
                </div>
            </div>
        </div>
    )
};