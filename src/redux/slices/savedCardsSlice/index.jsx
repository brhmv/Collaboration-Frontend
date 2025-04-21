import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const savedCardsApi = createApi({
    reducerPath: "SavedCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["SavedCards"],
    endpoints: (builer) => ({
        getSavedCards: builer.query({
            query: () => 'SavedCards',
            providesTags: ['SavedCards']
        })
    })
})
export const {
    useGetSavedCardsQuery
} = savedCardsApi;

export const { reducerPath, reducer, middleware } = savedCardsApi;