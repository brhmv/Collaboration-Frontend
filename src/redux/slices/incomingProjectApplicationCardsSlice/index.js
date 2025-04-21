import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:8000/'

export const incomingProjectApplicationCardsApi = createApi({
    reducerPath: "IncomingProjectApplicationCards",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["IncomingProjectApplicationCards"],
    endpoints: (builder) => ({
        getIncomingProjectApplicationCards: builder.query({
            query: () => 'IncomingProjectApplicationCards',
            providesTags: ['IncomingProjectApplicationCards']
        }),
        updateIncomingProjectApplicationCard: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `IncomingProjectApplicationCard/${id}`,
                method: 'PATCH',
                body: patch
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'IncomingProjectApplicationCard', id }],

        }),
    })
})
export const {
    useGetIncomingProjectApplicationCardsQuery,
    useUpdateIncomingProjectApplicationCardQuery
} = incomingProjectApplicationCardsApi;

export const { reducerPath, reducer, middleware } = incomingProjectApplicationCardsApi;