
import Navbar from '../../components/Home/Navbar/Navbar'
import Header from '../../components/Home/Header/Header'
import Card from '../../components/Home/Card/index'
import photo from '../../assets/images/risImage.png'
import background from '../../assets/images/card-image.png'


export default function Home() {
    return (
        <div className='home-container'>
            <Navbar />
            <Header />
            <h1>Layihələr</h1>
            <div className="cards">
                <Card 
                type = 'project'
                bgImg = {background}
                title = 'Restoran idarəetmə sistemi'
                topicDescription = 'Restoranların masa rezervasiyası, sifarişlərin idarəsi və stok nəzarətini avtomatlaşdıran Java əsaslı masaüstü tətbiqdir.'
                profilePhoto = {photo}
                name = 'Murad Fərəczadə'
                job = 'UX / UI Designer'
                date = '01.04.2025'
                participantCount = {12}
                totalParticipants = {25}
                percentage = {20}
                />

                <Card 
                type = 'mentorium'
                bgImg = {background}
                title = 'Restoran idarəetmə sistemi'
                topicDescription = 'Restoranların masa rezervasiyası, sifarişlərin idarəsi və stok nəzarətini avtomatlaşdıran Java əsaslı masaüstü tətbiqdir.'
                profilePhoto = {photo}
                name = 'Murad Fərəczadə'
                job = 'UX / UI Designer'
                date = '01.04.2025'
                participantCount = {12}
                totalParticipants = {25}
                percentage = {20}
                />
                
            </div>
        </div>

    );
}