import React from 'react';
import { Link } from 'react-router';
import { cn } from '../../utils/MergeTailwindclasses';

function PrimaryButton({
    variant = "button",
    children,
    type = "button",
    to = "",
    className = "",
    onClick
}) {
    const baseStyles = "py-[clamp(3px,1vw,8px)] px-[clamp(8px,1vw,16px)] text-sm font-medium text-white bg-blue-turing py-2 px-4 rounded-lg w-full";


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

export default PrimaryButton;