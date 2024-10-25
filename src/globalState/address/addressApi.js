import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
    reducerPath: "addressApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://143.110.178.49/ev-charging-backend/api"
    }),
    tagTypes: ["country", "state", "city"],
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => ({
                url: "/countries"
            }),
            providesTags: ["country"],
        }),
        getState: builder.query({
            query: (countryId) => ({
                url: `/states/${countryId}`
            }),
            providesTags: ["state"],
        }),
        getCity: builder.query({
            query: (stateId) => ({
                url: `/cities/${stateId}`
            }),
            providesTags: ["city"],
        }),
    }),
})

export const {
    useGetCountryQuery,
    useGetStateQuery,
    useGetCityQuery
} = addressApi;