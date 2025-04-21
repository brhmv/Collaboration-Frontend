import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 0,
};

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
    },
});


export const { setActiveTab } = tabSlice.actions;


export default tabSlice.reducer;

export const selectActiveTab = (state) => state.tab.activeTab;