import './CardDetails.css'
import Navbar from '../../components/Home/Navbar/Navbar'
import Profile from '../../components/CardDetails/ProfileSection/Projile'
import CardDescription from '../../components/CardDetails/CardDescription/CardDescription'


export default function CardDetails() {
    return (
       <div className="card-details">
        <div className="container">
            <Navbar/>
            <div className="profile">
                <Profile/>
            </div>

            <div className="description">
                <CardDescription/>
            </div>
        </div>
       </div>
    );
}