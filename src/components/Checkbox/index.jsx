import React from 'react';
import { Check } from 'lucide-react';

const Checkbox = ({ label, checked, value, onChange }) => {
    const handleToggle = () => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="flex items-center justify-center cursor-pointer gap-[clamp(8px,2vw,12px)]" onClick={handleToggle}>
            <div className={`cursor-pointer flex items-center justify-center size-[17px] rounded-[6px] ${checked ? 'bg-orange-turing' : 'bg-white border border-gray-20'}`}>
                {checked && <Check className="cursor-pointer flex items-center justify-center text-white border border-white rounded-[4px] size-[14px] p-[2px]" size={16} strokeWidth={3} />}
            </div>
            <span className="text-[clamp(12px,2vw,17px)] text-gray-20">{label}</span>
        </div>
    );
};

export default Checkbox;