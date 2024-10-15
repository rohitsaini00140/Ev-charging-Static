import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api/"
    }),
    tagTypes: ["admins"],
    endpoints: (builder) => ({

        getAdmin: builder.query({
            query: () => `/users`,
        }),

        createAdmin: builder.mutation({
            query: (adminData) => ({
                url: `/users/create`,
                method: "POST",
                body: adminData
            }),
            invalidatesTags: ['admins']
        })

    })
})

export const {
    useGetAdminQuery,
    useCreateAdminMutation
} = adminApi;
