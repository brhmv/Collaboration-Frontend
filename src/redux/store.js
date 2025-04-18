import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '@/redux/slices/tabSlice/index';
import searchReducer from '@/redux/slices/searchSlice/index';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        search: searchReducer,
    },
});