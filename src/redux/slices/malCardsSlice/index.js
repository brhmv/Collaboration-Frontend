import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8000/'

export const malCardsApi = createApi({
    reducerPath: 'malCardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['MALCards'],
    endpoints: (builder) => ({
        getMALCards: builder.query({
            query: () => 'MALCards',
            providesTags: ['MALCards'],
        }),
        getMALCardById: builder.query({
            query: (id) => `MALCards/${id}`,
            providesTags: (result, error, id) => [{ type: 'MALCards', id }],
        }),
        addMALCard: builder.mutation({
            query: (card) => ({
                url: 'MALCards',
                method: 'POST',
                body: card,
            }),
            invalidatesTags: ['MALCards'],
        }),
        updateMALCard: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `MALCards/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'MALCards', id }],
        }),
        deleteMALCard: builder.mutation({
            query: (id) => ({
                url: `MALCards/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['MALCards'],
        }),
    }),
});


export const {
    useGetMALCardsQuery,
    useGetMALCardByIdQuery,
    useAddMALCardMutation,
    useUpdateMALCardMutation,
    useDeleteMALCardMutation,
} = malCardsApi;

export const { reducerPath, reducer, middleware } = malCardsApi;