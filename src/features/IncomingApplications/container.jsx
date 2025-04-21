import IncomingApplicationCard from '../../components/IncomingApplicationCard';
import MotionContainer from '../../animations/MotionContainer';
import MotionItem from '../../animations/MotionItem';
import { useGetIncomingProjectApplicationCardsQuery } from '../../redux/slices/incomingProjectApplicationCardsSlice';



function IncomingApplications() {
    const {
        data: IncomingProjectApplicationCards,
    } = useGetIncomingProjectApplicationCardsQuery();
    return (
        <MotionContainer>
            <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gr">
                {
                    IncomingProjectApplicationCards && IncomingProjectApplicationCards.map((item) => (
                        <MotionItem key={item.id}>
                            <IncomingApplicationCard {...item} />
                        </MotionItem>
                    ))
                }
            </ul>
        </MotionContainer >
    );
}

export default IncomingApplications;