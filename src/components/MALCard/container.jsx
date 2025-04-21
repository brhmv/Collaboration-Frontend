import React from 'react';
import CardHeader from './ui/CardHeader/index';
import CardMain from './ui/CardMain/index';
import CardFooter from './ui/CardFooter/index';
import { cn } from '../../utils/MergeTailwindclasses';

const MALCard = ({ children, className = '' }) => {
    return (

        <div className={cn(" h-full flex flex-col space-y-[16px]", className)}>
            {children}
        </div>

    );
};

MALCard.Header = CardHeader;
MALCard.Main = CardMain;
MALCard.Footer = CardFooter;

export default MALCard;