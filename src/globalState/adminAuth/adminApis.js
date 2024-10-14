import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api/"
    }),
    endpoints: (builder) => ({

        getAdmin: builder.query({
            query: () => `/users`,
        }),

    })
})

export const {
    useGetAdminQuery,
} = adminApi;
