import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const sendedProjectApplicationCardsApi = createApi({
    reducerPath: "SendedProjectApplicationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["SendedProjectApplicationCards"],
    endpoints: (builer) => ({
        getSendedProjectApplicationCards: builer.query({
            query: () => 'SendedProjectApplicationCards',
            providesTags: ['SendedProjectApplicationCards']
        })
    })
})
export const {
    useGetSendedProjectApplicationCardsQuery
} = sendedProjectApplicationCardsApi;

export const { reducerPath, reducer, middleware } = sendedProjectApplicationCardsApi;