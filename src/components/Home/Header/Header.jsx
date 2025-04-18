import { FiPlus } from "react-icons/fi";


import PrimaryButton from "@/components/PrimaryButton/index"
import SecondaryButton from "@/components/SecondaryButton/index"
import SearchBar from "../SearchBar";
export default function Header() {


    return (
        <div className="header">
            <div className="container">
                <div className="addNew">
                    <PrimaryButton variant="link" to="/createMentorium" className="mentorium">
                        <p>Mentorium yarat</p>
                        <div className='plus-icon-mentorium'>
                            <FiPlus />
                        </div>
                    </PrimaryButton>
                    <SecondaryButton variant="link" to="/createProject" className="project">
                        <p>Layihə yarat</p>
                        <div className='plus-icon-project'>
                            <FiPlus />
                        </div>
                    </SecondaryButton>
                </div>

                <SearchBar />
            </div>
        </div>

    );
}
