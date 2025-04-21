import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const participatedInCardsApi = createApi({
    reducerPath: "ParticipatedInCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["ParticipatedInCards"],
    endpoints: (builer) => ({
        getParticipatedInCards: builer.query({
            query: () => 'ParticipatedInCards',
            providesTags: ['ParticipatedInCards']
        })
    })
})
export const {
    useGetParticipatedInCardsQuery
} = participatedInCardsApi;

export const { reducerPath, reducer, middleware } = participatedInCardsApi;