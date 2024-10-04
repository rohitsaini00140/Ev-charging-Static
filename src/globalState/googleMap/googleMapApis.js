import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const googleMapApi = createApi({
    reducerPath: "googleMapApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://maps.googleapis.com/maps/api"
    }),
    tagTypes: ["googleMap"],
    endpoints: (builder) => ({
        getGeocode: builder.query({
            query: ({ address }) => ({
                url: `/geocode/json?address=${encodeURIComponent(address)}&key=${"AIzaSyCyMrVtiLgr0ywJWHQClgUgtgunWZMlopQ"}`
            }),
            providesTags: ["googleMap"],
        }),
    }),
})

export const {
    useGetGeocodeQuery
} = googleMapApi;