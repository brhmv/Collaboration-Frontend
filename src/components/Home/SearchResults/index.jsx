import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@/components/Home/Card/index';
import { WaitingApprovalCards } from '@/pages/HomePage/data/mock__data';
import photo from '@/assets/images/risImage.png';
import background from '@/assets/images/card-image.png';


function SearchResults() {
    const { filteredItemIds } = useSelector(state => state.search);
    const filteredCards = WaitingApprovalCards.filter(card =>
        filteredItemIds.includes(card.id)
    );
    return (
        <div className="search-results-section">
            {filteredCards.length > 0 ? (
                <div className="cards">
                    {filteredCards.map(card => (
                        <Card
                            key={card.id}
                            bgImg={background}
                            profilePhoto={photo}
                            {...card}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p>Axtarışınıza uyğun nəticə tapılmadı.</p>
                </div>
            )}
        </div>
    );
}

export default SearchResults;