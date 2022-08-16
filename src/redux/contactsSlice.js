import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fb4bc5e4bcaf53518116c1.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery } = contactsApi;
