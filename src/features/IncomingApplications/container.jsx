import IncomingApplicationCard from '../../components/IncomingApplicationCard';
import { useGetIncomingProjectApplicationCardsQuery } from '../../redux/slices/incomingProjectApplicationCardsSlice';

function IncomingApplications() {
    const {
        data: incomingProjectApplicationCards,
    } = useGetIncomingProjectApplicationCardsQuery();

    return (
        <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gr">
            {
                incomingProjectApplicationCards && incomingProjectApplicationCards.length > 0 ? (
                    incomingProjectApplicationCards.map((item) => (
                        item.status === "pending" && (
                            <IncomingApplicationCard
                                key={item.id}
                                {...item} />
                        )
                    ))
                ) : (
                    <div>No applications found</div>
                )
            }
        </ul>
    );
}

export default IncomingApplications;