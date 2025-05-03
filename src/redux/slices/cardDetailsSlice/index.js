import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8000/';

export const cardDetailsApi = createApi({
    reducerPath: "cardDetails",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["cardDetails"],
    endpoints: (builder) => ({
        getCardDetails: builder.query({
            query: (id) => `cardDetails/${id}`,
            providesTags: (result, error, id) => [{ type: 'cardDetails', id }]
        })
    })
});

export const { useGetCardDetailsQuery } = cardDetailsApi;

export const { reducerPath, reducer, middleware } = cardDetailsApi;