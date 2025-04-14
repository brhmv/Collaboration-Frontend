import React from 'react'
import clockIcon from '@/assets/icons/clock.svg';
function DateAndTime({ date, time }) {
    return (
        <div className="flex items-center gap-1 w-max">

            <img
                src={clockIcon}
                alt="clock icon orange"
                className=""
            />
            <div className="text-[clamp(8px,1vw,12px)] font-light flex items-center justify-center gap-0.5">
                <div>
                    {date}
                </div>
                <span>,</span>
                <div>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default DateAndTime