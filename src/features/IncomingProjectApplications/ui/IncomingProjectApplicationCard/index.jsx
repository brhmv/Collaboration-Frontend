import React from 'react';
import mockProfile from '@/assets/images/mock_profile.png';
import clockIcon from '@/assets/icons/clock.svg';
import ConfirmButton from '../ConfirmButton';
import RejectButton from '../RejectButton';
import ViewProfileButton from '../ViewProfileButton';
import DateAndTime from '../DateAndTime/index';

function IncomingProjectApplicationCard({ name, position, date, time, projectName }) {
    return (
        <div className="border border-gray-200 flex p-4 md:p-5 rounded-lg  h-full items-center justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex gap-1 md:gap-1.5 items-center justify-start h-full">
                    <img
                        src={mockProfile}
                        alt="mock profile photo"
                        className=" lg:h-10 rounded-full"
                    />
                    <div className="flex flex-col h-full text-left justify-center">
                        <h3 className="text-sm md:text-base lg:text-xl font-medium">
                            {name}
                        </h3>
                        <p className="text-xs md:text-sm text-[color:var(--gray-color)]">
                            {position}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                    <div className="flex items-center gap-1">
                        <img
                            src={clockIcon}
                            alt="clock icon orange"
                            className=""
                        />
                        <DateAndTime date={date} time={time} />
                    </div>
                    <div className="text-xs md:text-sm lg:text-base font-medium text-blue-turing">
                        {projectName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
                <div className="flex justify-between items-center  w-full h-full gap-2 flex-col sm:flex-row">
                    <ConfirmButton />
                    <RejectButton />
                </div>
                <div>
                    <ViewProfileButton />
                </div>
            </div>
        </div>
    );
}

export default IncomingProjectApplicationCard;