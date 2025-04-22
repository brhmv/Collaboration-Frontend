import React from 'react'
import searchIcon from "@/assets/icons/search.svg"
function SearchButton() {
    return (
        <button type="submit" className="p-[clamp(10px,2vw,14px)] rounded-full bg-orange-turing text-white flex items-center justify-center border-none cursor-pointer">
            <img src={searchIcon} alt="search icon" className='size-[clamp(12px,4vw,18px)]' />
        </button>
    )
}

export default SearchButton
