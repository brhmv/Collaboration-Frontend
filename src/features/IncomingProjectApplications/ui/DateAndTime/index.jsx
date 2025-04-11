import React from 'react'

function DateAndTime({ date, time }) {
    return (
        <div className="flex items-center justify-center gap-0.5">
            <div>
                {date}
            </div>
            <span>,</span>
            <div>
                {time}
            </div>
        </div>
    )
}

export default DateAndTime