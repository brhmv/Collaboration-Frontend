import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '@/redux/slices/tabSlice/index';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from '@/redux/slices/searchSlice/index';
import shareModalReducer from '@/redux/slices/shareModalSlice';
import { malCardsApi } from '@/redux/slices/malCardsSlice/index';
import { savedCardsApi } from '@/redux/slices/savedCardsSlice/index';
import { myCreationCardsApi } from '@/redux/slices/myCreationCardsSlice/index';
import { participatedInCardsApi } from '@/redux/slices/participatedInCardsSlice/index';
import { waitingApprovalCardsApi } from '@/redux/slices/waitingApprovalCardsSlice/index';
import { sendedProjectApplicationCardsApi } from '@/redux/slices/sendedProjectApplicationCardsSlice/index';
import { incomingProjectApplicationCardsApi } from '@/redux/slices/incomingProjectApplicationCardsSlice/index';
import { sendedMentoriumApplicationCardsApi } from '@/redux/slices/sendedMentoriumApplicationCardsSlice/index';
import { incomingMentoriumApplicationCardsApi } from '@/redux/slices/incomingMentoriumApplicationCardsSlice/index';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        search: searchReducer,
        shareModal: shareModalReducer,
        [malCardsApi.reducerPath]: malCardsApi.reducer,
        [savedCardsApi.reducerPath]: savedCardsApi.reducer,
        [myCreationCardsApi.reducerPath]: myCreationCardsApi.reducer,
        [participatedInCardsApi.reducerPath]: participatedInCardsApi.reducer,
        [waitingApprovalCardsApi.reducerPath]: waitingApprovalCardsApi.reducer,
        [sendedProjectApplicationCardsApi.reducerPath]: sendedProjectApplicationCardsApi.reducer,
        [incomingProjectApplicationCardsApi.reducerPath]: incomingProjectApplicationCardsApi.reducer,
        [sendedMentoriumApplicationCardsApi.reducerPath]: sendedMentoriumApplicationCardsApi.reducer,
        [incomingMentoriumApplicationCardsApi.reducerPath]: incomingMentoriumApplicationCardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(malCardsApi.middleware)
            .concat(savedCardsApi.middleware)
            .concat(myCreationCardsApi.middleware)
            .concat(participatedInCardsApi.middleware)
            .concat(waitingApprovalCardsApi.middleware)
            .concat(sendedProjectApplicationCardsApi.middleware)
            .concat(sendedMentoriumApplicationCardsApi.middleware)
            .concat(incomingProjectApplicationCardsApi.middleware)
            .concat(incomingMentoriumApplicationCardsApi.middleware)
});

setupListeners(store.dispatch);