import React from 'react';

const CardDescription = ({ title, topicDescription }) => {
    return (
        <div>
            <h3 className="font-[450] text-blue-turing text-[clamp(20px,4vw,24px)] truncate w-[32ch]">{title}</h3>
            <p className="text-[clamp(12px,3vw,14px)] font-[450] text-blue-turing line-clamp-2">{topicDescription}</p>
        </div>
    );
};

export default CardDescription;