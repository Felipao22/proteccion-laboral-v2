import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tagTypes = ["User", "Constancia-visita", "File", "Kinds"];

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes,
  endpoints: () => ({}),
});
