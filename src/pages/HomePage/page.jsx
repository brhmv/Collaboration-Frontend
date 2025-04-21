import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Home/Navbar/Navbar';
import Header from '../../components/Home/Header/Header';
import SearchResults from '../../components/Home/SearchResults';
import { useGetMALCardsQuery } from '../../redux/slices/malCardsSlice';
import MALCard from '../../components/MALCard/container';


export default function HomePage() {
    const { showResults, filterOption } = useSelector(state => state.search);
    const {
        data: defaultCards,
    } = useGetMALCardsQuery();

    return (
        <div className='home-container' >
            <Navbar />
            <Header />
            <h1>{filterOption}</h1>
            {showResults ? (
                <SearchResults />
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(16px,4vh,32px)] mt-[70px]'>
                    {defaultCards && defaultCards.map(card => (
                        <MALCard key={card.id} type={card.type}>
                            <MALCard.Header
                                bgImg={card.bgImg}
                                type={card.type}
                            />
                            <MALCard.Main>
                                <MALCard.Main.Description
                                    title={card.title}
                                    topicDescription={card.topicDescription}
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
            )}
        </div>
    );
}