import React from 'react'

import { IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
function CardHeader({ type, bgImg }) {
    return (
        <div className="cardHeader">
            <div className="bgImg">
                <img src={bgImg} alt="background image" />
            </div>
            <div className="icons">
                <div className="share"><IoShareSocialOutline /></div>
                <div className="bookmark"><IoBookmarkOutline /></div>
            </div>
            <div className="cardName">
                <p className='cardType'>{type === "mentorium" ? "Mentorium" : "Layihə"}</p>
            </div>
        </div>
    )
}

export default CardHeader
