import React from 'react';
import { Link } from 'react-router';
import { cn } from '../../utils/MergeTailwindclasses';

function SecondaryButton({
    variant = "button",
    children,
    type = "button",
    to = "",
    className = "",
    onClick
}) {
    const baseStyles = "whitespace-nowrap custom-border text-sm font-medium text-blue-turing bg-white py-[clamp(3px,1vh,8px)] px-[clamp(8px,1vw,16px)] rounded-lg w-full";


    const isLink = variant !== "button" && to !== "";

    if (isLink) {
        return (
            <Link
                to={to}
                className={cn(baseStyles, className)}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={cn(baseStyles, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default SecondaryButton;