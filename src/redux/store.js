import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import tabReducer from '@/redux/slices/tabSlice/index';
import searchReducer from '@/redux/slices/searchSlice/index';
import { malCardsApi } from '@/redux/slices/malCardsSlice/index';
import { incomingProjectApplicationCardsApi } from '@/redux/slices/incomingProjectApplicationCardsSlice/index';
import { incomingMentoriumApplicationCardsApi } from '@/redux/slices/incomingMentoriumApplicationCardsSlice/index';
import { sendedProjectApplicationCardsApi } from '@/redux/slices/sendedProjectApplicationCardsSlice/index';
import { sendedMentoriumApplicationCardsApi } from '@/redux/slices/sendedMentoriumApplicationCardsSlice/index';
import { myCreationCardsApi } from '@/redux/slices/myCreationCardsSlice/index';
import { participatedInCardsApi } from '@/redux/slices/participatedInCardsSlice/index';
import { waitingApprovalCardsApi } from '@/redux/slices/waitingApprovalCardsSlice/index';
import { savedCardsApi } from '@/redux/slices/savedCardsSlice/index';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        search: searchReducer,
        [malCardsApi.reducerPath]: malCardsApi.reducer,
        [incomingProjectApplicationCardsApi.reducerPath]: incomingProjectApplicationCardsApi.reducer,
        [incomingMentoriumApplicationCardsApi.reducerPath]: incomingMentoriumApplicationCardsApi.reducer,
        [sendedProjectApplicationCardsApi.reducerPath]: sendedProjectApplicationCardsApi.reducer,
        [sendedMentoriumApplicationCardsApi.reducerPath]: sendedMentoriumApplicationCardsApi.reducer,
        [myCreationCardsApi.reducerPath]: myCreationCardsApi.reducer,
        [participatedInCardsApi.reducerPath]: participatedInCardsApi.reducer,
        [waitingApprovalCardsApi.reducerPath]: waitingApprovalCardsApi.reducer,
        [savedCardsApi.reducerPath]: savedCardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(malCardsApi.middleware)
            .concat(incomingProjectApplicationCardsApi.middleware)
            .concat(incomingMentoriumApplicationCardsApi.middleware)
            .concat(sendedProjectApplicationCardsApi.middleware)
            .concat(sendedMentoriumApplicationCardsApi.middleware)
            .concat(myCreationCardsApi.middleware)
            .concat(participatedInCardsApi.middleware)
            .concat(waitingApprovalCardsApi.middleware)
            .concat(savedCardsApi.middleware)
});

setupListeners(store.dispatch);