import React, { useState } from 'react'
import crossIcon from "@/assets/icons/cross.svg"
import arrowIcon from "@/assets/icons/Arrow-Down-2.svg"

function Input({
    type,
    label,
    options = [],
    value = "",
    onChange,
    rows = 3
}) {
    const [isFocused, setIsFocused] = useState(false)

    // Handle input change and propagate to parent
    const handleInputChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    }

    // Clear input
    const clearInput = () => {
        // Create a synthetic event to mimic a change event
        const syntheticEvent = {
            target: { value: '' }
        };
        if (onChange) {
            onChange(syntheticEvent);
        }
    }

    return (
        <div className={`w-full flex justify-between items-center border border-[#808080] px-[clamp(10px,2vw,16px)] py-[clamp(6px,2vh,10px)] rounded-[8px] ${isFocused ? 'border border-blue-turing' : ''}`}>
            <label className='text-gray-20 font-[400] text-[clamp(8px,1vw,12px)] flex flex-col gap-[clamp(3px,1vh,6px)] w-full'>
                {label}
                <div className="w-full">
                    {type === "select" ? (
                        <div className="relative w-full">
                            <select
                                value={value}
                                onChange={handleInputChange}
                                className='focus:outline-none text-blue-turing font-[400] text-[clamp(8px,2vw,16px)] bg-transparent w-full appearance-none'
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            >
                                <option value="">Seçin</option>
                                {options && options.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute top-[-9px] right-0 flex items-center pointer-events-none">
                                <img src={arrowIcon} alt="arrow down icon" />
                            </div>
                        </div>
                    ) : type === "textarea" ? (
                        <textarea
                            value={value}
                            onChange={handleInputChange}
                            rows={rows}
                            className='focus:outline-none text-blue-turing font-[400] text-[clamp(8px,2vh,16px)] bg-transparent w-full resize-none'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    ) : (
                        <input
                            type={type}
                            value={value}
                            onChange={handleInputChange}
                            className='focus:outline-none text-blue-turing font-[400] text-[clamp(8px,2vh,16px)] bg-transparent w-full '
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    )}
                </div>
            </label>
            {value && type !== "select" && (
                <button
                    className='cursor-pointer flex items-center justify-center bg-gray-300 size-[clamp(15px,3vw,30px)] rounded-full'
                    onClick={clearInput}
                    type="button"
                >
                    <img src={crossIcon} alt="cross icon" />
                </button>
            )}
        </div>
    )
}

export default Input