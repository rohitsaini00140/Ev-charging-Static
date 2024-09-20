import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const zoneApi = createApi({
    reducerPath: "zoneApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21"
    }),
    tagTypes: ["zone"],
    endpoints: (builder) => ({
        addZone: builder.mutation({
            query: (zoneData) => ({
                url: "/api/zones/create",
                method: "POST",
                body: zoneData,
            }),
            invalidatesTags: ['zone']
        }),
        getZone: builder.query({
            query: ({ page }) => ({
                url: `/api/zones/list?page=${page}`
            }),
            providesTags: ['zone'],
        }),
        updateZone: builder.mutation({
            query: ({ id, updatedZoneData }) => ({
                url: `/api/zones/update/${id}`,
                method: "PUT",
                body: updatedZoneData,
            }),
            invalidatesTags: ['zone']
        }),
    }),
})

export const {
    useAddZoneMutation,
    useGetZoneQuery,
    useUpdateZoneMutation
} = zoneApi;