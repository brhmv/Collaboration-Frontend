import './HomeCardMentorium.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import { Flex } from 'antd'; 
import cardImage from '../../../../assets/images/card-image.png';
import ris from '../../../../assets/images/risImage.png';

const HomeCardMentorium = () => {
  const size = 40; 
  const strokeWidth = 4; 
  const percentage = 25; 


  const radius = size / 2 - strokeWidth;


  const circumference = 2 * Math.PI * radius;


  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="mentorium-card">
      <div className="container">
        <div className="card-header">
          <img src={cardImage} alt="image" />
          <div className="icons-name">
            <div className="icons">
              <div className="share"><IoShareSocialOutline /></div>
              <div className="bookmark"><GoBookmark /></div>
            </div>
            <div className="card-name">
              <p className='project'>Mentorium</p>
            </div>
          </div>
        </div>
        <div className="card-main">
          <p className='card-name'>Fitts qanunun əsasları</p>
          <p className='description'>Restoranların masa rezervasiyası, sifarişlərin idarəsi və stok nəzarətini avtomatlaşdıran Java əsaslı masaüstü tətbiqdir.</p>
          <div className="name-img">
            <img src={ris} alt="profile-photo" />
            <div className="profile-description">
              <p className='name'>Murad Fərəczadə</p>
              <p className='job-title'>UX / UI dizayner</p>
            </div>
            <div className="participants">
              <div style={{ position: "relative", width: `${size}px`, height: `${size}px` }}>
                <svg width={size} height={size}>
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#0D1B4D"
                    strokeWidth={strokeWidth}
                    fill="none"
                  />
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#FF4400"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {percentage}%
                </div>
              </div>
              <p className='number-participants'>İştirakçı sayı <br /> <span>12/20</span> </p>
            </div>
          </div>
          <div className="date-container">
            <p className='date'>Son müraciət tarixi: 01.04.2025 </p>
          </div>
        </div>
        <div className="card-footer-mentor">
          <button className='apply'>Müraciət et</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCardMentorium;
