import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '@/redux/slices/tabSlice/index';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
    },
});