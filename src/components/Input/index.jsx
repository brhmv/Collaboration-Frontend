import React, { useState } from 'react'
import crossIcon from "@/assets/icons/cross.svg"
import arrowIcon from "@/assets/icons/Arrow-Down-2.svg"

function Input({ type, label, options, defaultValue }) {
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState(defaultValue || '')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const clearInput = () => {
        setInputValue('')
    }

    return (
        <div className={`w-full flex justify-between items-center border border-[#808080] px-[clamp(10px,2vw,16px)] py-[clamp(6px,2vh,10px)] rounded-[8px] ${isFocused ? 'border border-blue-turing' : ''}`}>
            <label className='text-gray-20 font-[400] text-[clamp(8px,1vw,12px)] flex flex-col gap-[clamp(3px,1vh,6px)] w-full'>
                {label}
                <div className="w-full">
                    {type === "select" ? (
                        <div className="relative w-full">
                            <select
                                value={inputValue}
                                onChange={handleInputChange}
                                className='focus:outline-none text-blue-turing font-[400] text-[clamp(8px,2vw,16px)] bg-transparent w-full appearance-none'
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            >
                                {options && options.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute top-[-9px] right-0 flex items-center pointer-events-none">
                                <img src={arrowIcon} alt="arrow down icon" />
                            </div>
                        </div>
                    ) : (
                        <input
                            type={type}
                            value={inputValue}
                            onChange={handleInputChange}
                            className='focus:outline-none text-blue-turing font-[400] text-[clamp(8px,2vh,16px)] bg-transparent w-full '
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    )}
                </div>
            </label>
            {inputValue && type !== "select" && (
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