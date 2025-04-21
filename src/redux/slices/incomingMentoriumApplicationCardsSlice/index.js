import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const incomingMentoriumApplicationCardsApi = createApi({
    reducerPath: "IncomingMentoriumApplicationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["IncomingMentoriumApplicationCards"],
    endpoints: (builer) => ({
        getIncomingMentoriumApplicationCards: builer.query({
            query: () => 'IncomingMentoriumApplicationCards',
            providesTags: ['IncomingMentoriumApplicationCards']
        })
    })
})
export const {
    useGetIncomingMentoriumApplicationCardsQuery
} = incomingMentoriumApplicationCardsApi;

export const { reducerPath, reducer, middleware } = incomingMentoriumApplicationCardsApi;