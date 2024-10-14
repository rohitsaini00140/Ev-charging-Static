import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deviceApi = createApi({
    reducerPath: "deviceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api"
    }),
    tagTypes: ["device"],

    endpoints: (builder) => ({
        addDevice: builder.mutation({
            query: (deviceData) => ({
                url: "/devices/create",
                method: "POST",
                body: deviceData,
            }),
            invalidatesTags: ['device']
        }),
     
    }),
})
export const {
    useAddDeviceMutation,
} = deviceApi;
