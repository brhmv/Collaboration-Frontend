import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setFilteredItemIds, toggleShowResults } from '@/redux/slices/searchSlice';

import DropdownFilter from '../DropdownFilter';
import SearchButton from '../SearchButton';
import { useGetMALCardsQuery } from '../../../redux/slices/malCardsSlice';

import { RxCross2 } from "react-icons/rx";
function SearchBar() {
    const { data: cards } = useGetMALCardsQuery();
    const dispatch = useDispatch();
    const { searchText, filterOption } = useSelector(state => state.search);

    const handleSearchChange = (e) => {
        dispatch(setSearchText(e.target.value));
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchText.trim()) {
            const filteredIds = cards
                .filter(item => {
                    const typeMatches = filterOption === 'Bütün' ||
                        (filterOption === 'Layihələr' && item.type === 'project') ||
                        (filterOption === 'Mentoriumlar' && item.type === 'mentorium');

                    const textMatches =
                        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.topicDescription.toLowerCase().includes(searchText.toLowerCase());

                    return typeMatches && textMatches;
                })
                .map(item => item.id);

            dispatch(setFilteredItemIds(filteredIds));
            dispatch(toggleShowResults(true));
        } else {
            dispatch(setFilteredItemIds([]));
            dispatch(toggleShowResults(false));
        }
    };
    const clearInput = () => {
        dispatch(setSearchText(""));
    }

    return (
        <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-[#F3F3F6] h-14 sm:h-16 w-full rounded-[30px] p-[clamp(6px,1.5vw,8px)] pl-[clamp(18px,4vw,24px)]"
            >
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Layihə və mentorium axtar"
                    className="flex-1 bg-gray-60 outline-none text-base sm:text-lg placeholder:text-gray-50 font-[400]  text-[clamp(14px,3vw,18px)]"
                />
                {searchText && (
                    <button
                        className='cursor-pointer flex items-center justify-center border-none bg-gray-70 text-[clamp(9px,2vw,12px)] p-[3px] rounded-full'
                        onClick={clearInput}
                        type="button"
                    >
                        <RxCross2 className='text-white' />
                    </button>
                )}

                <div className="flex items-center gap-4 ml-2">
                    <DropdownFilter />
                    <SearchButton />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
