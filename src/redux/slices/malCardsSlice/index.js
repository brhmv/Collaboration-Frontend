import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8000/';

export const malCardsApi = createApi({
    reducerPath: 'malCardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['MALCards', 'SavedCards'],
    endpoints: (builder) => ({
        // Existing endpoints
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

        // New endpoints for saved functionality
        getSavedCards: builder.query({
            query: () => 'saved-cards',
            providesTags: ['SavedCards'],
        }),
        getCardSavedStatus: builder.query({
            query: (id) => `cards/${id}/saved-status`,
            providesTags: (result, error, id) => [{ type: 'SavedCards', id }],
        }),
        toggleSavedStatus: builder.mutation({
            query: ({ id, saved }) => ({
                url: `cards/${id}/saved-status`,
                method: 'PUT',
                body: { saved },
            }),
            // Optimistic updates
            async onQueryStarted({ id, saved }, { dispatch, queryFulfilled }) {
                // Optimistically update the individual card's saved status
                const patchCardResult = dispatch(
                    malCardsApi.util.updateQueryData('getCardSavedStatus', id, () => saved)
                );

                // Optimistically update the card in the full list if it exists there
                const patchListResult = dispatch(
                    malCardsApi.util.updateQueryData('getMALCards', undefined, (draft) => {
                        const cardToUpdate = draft?.find(card => card.id === id);
                        if (cardToUpdate) {
                            cardToUpdate.saved = saved;
                        }
                    })
                );

                // Optimistically update the card in the saved cards list
                const patchSavedListResult = dispatch(
                    malCardsApi.util.updateQueryData('getSavedCards', undefined, (draft) => {
                        if (saved) {
                            // If we're saving the card, we might need to fetch its full data
                            // This is simplified, you might need to use another approach
                            const existingCard = draft?.find(card => card.id === id);
                            if (!existingCard && draft) {
                                // For now, we'll just add a placeholder that'll be replaced on refetch
                                draft.push({ id, saved: true, isPlaceholder: true });
                            }
                        } else {
                            // If we're unsaving, we can just filter it out
                            return draft?.filter(card => card.id !== id) || [];
                        }
                    })
                );

                try {
                    // Wait for the actual API request to complete
                    await queryFulfilled;
                } catch {
                    // If the request fails, undo all optimistic updates
                    patchCardResult.undo();
                    patchListResult.undo();
                    patchSavedListResult.undo();
                }
            },
            invalidatesTags: (result, error, { id }) => [
                { type: 'SavedCards', id },
                'SavedCards',
            ],
        }),
    }),
});

export const {
    // Existing exports
    useGetMALCardsQuery,
    useGetMALCardByIdQuery,
    useAddMALCardMutation,
    useUpdateMALCardMutation,
    useDeleteMALCardMutation,
    // New exports
    useGetSavedCardsQuery,
    useGetCardSavedStatusQuery,
    useToggleSavedStatusMutation,
} = malCardsApi;

export const { reducerPath, reducer, middleware } = malCardsApi;