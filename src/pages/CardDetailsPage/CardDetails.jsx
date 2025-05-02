
import Navbar from '../../components/Home/Navbar/Navbar'
import Profile from '../../components/CardDetails/ProfileSection/Projile'
import CardDescription from '../../components/CardDetails/CardDescription/CardDescription'


export default function CardDetails() {
    return (
       <div className="card-details">
        <div className="container">
            <Navbar/>
            <div className="py-[15px] px-[30px]">
                <Profile/>
            </div>

            <div className="py-[15px] px-[30px]">
                <CardDescription 
                start="01.04.2025"
                end="01.04.2025"
                />
            </div>
        </div>
       </div>
    );
}