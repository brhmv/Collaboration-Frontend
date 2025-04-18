import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '@/components/Home/Navbar/Navbar';
import Header from '@/components/Home/Header/Header';
import Card from '@/components/Home/Card/index';
import { WaitingApprovalCards } from './data/mock__data'; // Import your data
import photo from '@/assets/images/risImage.png';
import background from '@/assets/images/card-image.png';

export default function Home() {
    // Get search state from Redux store
    const { showResults, filteredItemIds, searchText } = useSelector(state => state.search);

    // Get the first two cards for default display
    const defaultCards = WaitingApprovalCards.slice(0, 9);

    // Get the full card objects for the filtered IDs
    const filteredCards = showResults
        ? WaitingApprovalCards.filter(card => filteredItemIds.includes(card.id))
        : [];
    console.log(showResults)
    console.log(filteredItemIds)

    console.log(searchText)
    return (
        <div className='home-container'>
            <Navbar />
            <Header />


            {/* Search Results Section */}
            {showResults && (
                <div className="search-results-section">

                    {filteredCards.length > 0 ? (
                        <div className="cards">
                            {filteredCards.map(card => (
                                <Card
                                    key={card.id}
                                    type={card.type}
                                    bgImg={background} // Using the imported background
                                    title={card.title}
                                    topicDescription={card.topicDescription}
                                    profilePhoto={photo} // Using the imported photo
                                    name={card.name}
                                    job={card.job}
                                    date={card.date}
                                    participantCount={card.participantCount}
                                    totalParticipants={card.totalParticipants}
                                    percentage={card.percentage}
                                    applicationStatus={card.applicationStatus}
                                    variant={card.variant}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>Axtarışınıza uyğun nəticə tapılmadı.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Default Content - Show only when not displaying search results */}
            {!showResults && (
                <>
                    <h1>Layihələr</h1>
                    <div className="cards">
                        {defaultCards.map(card => (
                            <Card
                                key={card.id}
                                type={card.type}
                                bgImg={background}
                                title={card.title}
                                topicDescription={card.topicDescription}
                                profilePhoto={photo}
                                name={card.name}
                                job={card.job}
                                date={card.date}
                                participantCount={card.participantCount}
                                totalParticipants={card.totalParticipants}
                                percentage={card.percentage}
                                applicationStatus={card.applicationStatus}
                                variant={card.variant}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}