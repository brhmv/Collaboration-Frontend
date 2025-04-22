import React from 'react';
import { useSelector } from 'react-redux';

import { useGetMALCardsQuery } from '../../../redux/slices/malCardsSlice';
import MALCard from '../../MALCard/container';


function SearchResults() {
    const {
        data: cards,
    } = useGetMALCardsQuery();
    const { filteredItemIds } = useSelector(state => state.search);
    const filteredCards = cards.filter(card =>
        filteredItemIds.includes(card.id)
    );

    return (
        <div>
            {filteredCards.length > 0 ? (
                <div className="cards">
                    {filteredCards.map(card => (
                        <MALCard key={card.id} type={card.type}>
                            <MALCard.Header
                                bgImg={card.bgImg}
                                type={card.type}
                            />
                            <MALCard.Main>
                                <MALCard.Main.Description
                                    title={card.title}
                                    topicDescription={card.topicDescription}
                                    saved={card.saved}
                                />
                                <MALCard.Main.Profile
                                    profilePhoto={card.profilePhoto}
                                    name={card.name}
                                    job={card.job}
                                    date={card.date}
                                    type={card.type}
                                    participantCount={card.participantCount}
                                    totalParticipants={card.totalParticipants}
                                    percentage={card.percentage}
                                />
                            </MALCard.Main>
                            <MALCard.Footer type={card.type}>
                                {card.type === 'project' ? (
                                    <div className='flex gap-[clamp(12px,2vw,16px)]'>
                                        <MALCard.Footer.DetailsButton />
                                        <MALCard.Footer.ApplyButton />
                                    </div>
                                ) : (
                                    <MALCard.Footer.ApplyButton />
                                )}
                            </MALCard.Footer>
                        </MALCard>
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