import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const sendedMentoriumApplicationCardsApi = createApi({
    reducerPath: "SendedMentoriumApplicationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["SendedMentoriumApplicationCards"],
    endpoints: (builer) => ({
        getSendedMentoriumApplicationCards: builer.query({
            query: () => 'SendedMentoriumApplicationCards',
            providesTags: ['SendedMentoriumApplicationCards']
        })
    })
})
export const {
    useGetSendedMentoriumApplicationCardsQuery
} = sendedMentoriumApplicationCardsApi;

export const { reducerPath, reducer, middleware } = sendedMentoriumApplicationCardsApi;