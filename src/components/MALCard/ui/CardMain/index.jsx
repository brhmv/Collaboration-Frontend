import React from 'react';
import CardDescription from '../CardDescription';
import CardProfile from '../CardProfile';

const CardMain = ({ children }) => {
    return (
        <div className="flex flex-col space-y-[clamp(5px,1vh,10px)] flex-1">
            {children}
        </div>
    );
};

CardMain.Description = CardDescription;
CardMain.Profile = CardProfile;

export default CardMain;