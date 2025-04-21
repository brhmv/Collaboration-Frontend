import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const incomingProjectApplicationCardsApi = createApi({
    reducerPath: "IncomingProjectApplicationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["IncomingProjectApplicationCards"],
    endpoints: (builer) => ({
        getIncomingProjectApplicationCards: builer.query({
            query: () => 'IncomingProjectApplicationCards',
            providesTags: ['IncomingProjectApplicationCards']
        })
    })
})
export const {
    useGetIncomingProjectApplicationCardsQuery
} = incomingProjectApplicationCardsApi;

export const { reducerPath, reducer, middleware } = incomingProjectApplicationCardsApi;