import Navbar from '../../components/Home/Navbar/Navbar'
import Profile from '../../components/CardDetails/ProfileSection/Projile'
import CardDescription from '../../components/CardDetails/CardDescription/CardDescription'
import ShareModal from '../../components/MALCard/ui/ShareModal';
import { useGetCardDetailsQuery } from '../../redux/slices/cardDetailsSlice';
import { useParams } from 'react-router';

export default function CardDetails() {
    const { data } = useGetCardDetailsQuery(0); //id uygun olarak datanı fetch edir
    const { id } = useParams();
    return (
        <>
            <div className="card-details">
                <div>Id: {id}</div>
                <div className="container">
                    <Navbar />
                    {
                        data &&
                        <div className="py-[15px] px-[30px]">
                            <Profile customUrl={data.customUrl}
                                ownerName={data.ownerName}
                                ownerPPImgUrl={data.ownerPPImgUrl}
                                deadline={data.deadline} />
                        </div>
                    }
                    <div className="py-[15px] px-[30px]">
                        {
                            data && <CardDescription
                                currentMembers={data.currentMembers}
                                teamRoles={data.teamRoles}
                                imgUrl={data.imgUrl} title={data.title}
                                description={data.description}
                                requirements={data.requirements}
                                startingDate={data.startingDate}
                                endingDate={data.endingDate}


                            />
                        }
                    </div>
                </div>
            </div>
            <ShareModal />
        </>
    );
}