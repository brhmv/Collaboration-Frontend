import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const waitingApprovalCardsApi = createApi({
    reducerPath: "WaitingApprovalCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["WaitingApprovalCards"],
    endpoints: (builer) => ({
        getWaitingApprovalCards: builer.query({
            query: () => 'WaitingApprovalCards',
            providesTags: ['WaitingApprovalCards']
        })
    })
})
export const {
    useGetWaitingApprovalCardsQuery
} = waitingApprovalCardsApi;

export const { reducerPath, reducer, middleware } = waitingApprovalCardsApi;