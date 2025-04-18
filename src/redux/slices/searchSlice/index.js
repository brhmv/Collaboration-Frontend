// src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchText: '',
        filterOption: 'Bütün',
        showResults: false,
        filteredItemIds: [] // Store only IDs instead of full items
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
            state.showResults = action.payload.length > 0;
        },
        setFilterOption: (state, action) => {
            state.filterOption = action.payload;
        },
        setFilteredItemIds: (state, action) => {
            // Store only array of IDs
            state.filteredItemIds = action.payload;
        },
        toggleShowResults: (state, action) => {
            state.showResults = action.payload;
        },
        clearSearch: (state) => {
            state.searchText = '';
            state.showResults = false;
            state.filteredItemIds = [];
        }
    }
});

export const {
    setSearchText,
    setFilterOption,
    setFilteredItemIds,
    toggleShowResults,
    clearSearch
} = searchSlice.actions;

export default searchSlice.reducer;