
import './HomeCardProjects.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import cardImage from '../../../../assets/images/card-image.png'
import ris from '../../../../assets/images/risImage.png'
import { Link } from 'react-router';

const HomeCardProjects = () => {
  return (
    <div className="project-card">
      <div className="container">
        <div className="card-header">
          <img src={cardImage} alt="image" />
          <div className="icons-name">
            <div className="icons">
              <div className="share"><IoShareSocialOutline /></div>
              <div className="bookmark"><GoBookmark /></div>
            </div>
            <div className="card-name">
              <p className='project'>Layihə</p>
            </div>
          </div>
        </div>
        <div className="card-main">
          <p className='card-name'>Restoran idarəetmə sistemi</p>
          <p className='description-text'>Restoranların masa rezervasiyası, sifarişlərin idarəsi və stok nəzarətini avtomatlaşdıran Java əsaslı masaüstü tətbiqdir.</p>
          <div className="name-img">
            <img src={ris} alt="profile-photo" />
            <p className='name'>Murad Fərəczadə</p>
          </div>
          <div className="date-container">
            <p className='date'>Son müraciət tarixi: 01.04.2025 </p>
          </div>
        </div>
        <div className="card-footer">
          <Link to='#'>
          <button className='detailed'>Ətraflı</button>
          </Link>
          <button className='apply'>Müraciət et</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCardProjects;
