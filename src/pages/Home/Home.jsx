import './Home.css'
import Navbar from '../../components/Home/Navbar/Navbar'
import Header from '../../components/Home/Header/Header'
import Projects from '../../components/Home/Card/Project/HomeCardProjects'
import Mentorium from '../../components/Home/Card/Mentorium/HomeCardMentorium'


export default function Home() {
    return (
        <div className='home-container'>
            <Navbar />
            <Header />
            <h1>Layihələr</h1>
            <div className="cards">
                <Projects />
                <Projects />
                <Projects />
                <Mentorium />
                <Mentorium />
                <Mentorium />
            </div>
        </div>

    );
}