import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const myCreationCardsApi = createApi({
    reducerPath: "MyCreationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["MyCreationCards"],
    endpoints: (builer) => ({
        getMyCreationCards: builer.query({
            query: () => 'MyCreationCards',
            providesTags: ['MyCreationCards']
        })
    })
})
export const {
    useGetMyCreationCardsQuery
} = myCreationCardsApi;

export const { reducerPath, reducer, middleware } = myCreationCardsApi;