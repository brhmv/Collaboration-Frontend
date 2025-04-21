import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchText, setFilteredItemIds, toggleShowResults } from '@/redux/slices/searchSlice';

import DropdownFilter from '../DropdownFilter';
import SearchButton from '../SearchButton';
import { useGetMALCardsQuery } from '../../../redux/slices/malCardsSlice';
function SearchBar() {
    const {
        data: cards,
    } = useGetMALCardsQuery();

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

    return (
        <div className="search-container">
            <form onSubmit={handleSearchSubmit} className="search">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder='Layihə və mentorium axtar'
                    className="search-input"
                />

                <div className="btn-dropdown">
                    <DropdownFilter />
                    <SearchButton />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;