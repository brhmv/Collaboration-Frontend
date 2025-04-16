import { IncomingProjectApplicationContent } from './data/mock__data';
import IncomingApplicationCard from '../../components/IncomingApplicationCard';
import MotionContainer from '../../animations/MotionContainer';
import MotionItem from '../../animations/MotionItem';

function IncomingApplications() {

    return (
        <MotionContainer>
            <ul className="grid gap-[clamp(16px,6vw,32px)] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gr">
                {
                    IncomingProjectApplicationContent && IncomingProjectApplicationContent.map((item) => (
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