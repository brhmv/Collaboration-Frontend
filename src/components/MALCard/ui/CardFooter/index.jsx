import React from 'react';
import ApplyButton from '../ApplyButton';
import DetailsButton from '../DetailsButton';

const CardFooter = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};
CardFooter.ApplyButton = ApplyButton;
CardFooter.DetailsButton = DetailsButton;
export default CardFooter;