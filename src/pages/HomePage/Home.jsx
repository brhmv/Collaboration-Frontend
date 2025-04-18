import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Home/Navbar/Navbar';
import Header from '../../components/Home/Header/Header';
import Card from '../../components/Home/Card/index';
import SearchResults from '../../components/Home/SearchResults';
import { WaitingApprovalCards } from '@/pages/HomePage/data/mock__data';
import photo from '../../assets/images/risImage.png';
import background from '../../assets/images/card-image.png';


export default function Home() {
    const { showResults, filterOption } = useSelector(state => state.search);
    const defaultCards = WaitingApprovalCards.slice(0, 9);
    return (
        <div className='home-container'>
            <Navbar />
            <Header />
            <h1>{filterOption}</h1>
            {showResults ? (
                <SearchResults />
            ) : (
                <div className="cards">
                    {defaultCards.map(card => (
                        <Card
                            key={card.id}
                            bgImg={background}
                            profilePhoto={photo}
                            {...card}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}