import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/api/auth/register",
                method: "POST",
                body: userData
            })
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                url: "/api/auth/login",
                method: "POST",
                body: userData
            })
        }),
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = userApi;
