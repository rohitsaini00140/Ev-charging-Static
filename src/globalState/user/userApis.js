import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://143.110.178.49/ev-charging-backend/api/"
    }),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        
        getAllUser: builder.query({
            query: () => `/users`,
        }),

        getUsers: builder.query({
            query: ({ page, role_id, name, status, clusterName }) => {
                const params = new URLSearchParams();
                if (page) params.append('page', page);  
                if (role_id) params.append('role_id', role_id);
                if (clusterName) params.append('cluster_name', clusterName);
                if (name) params.append('name', name);
                if (status) params.append('status', status);

                return `/users/list?${params.toString()}`;
            },
            providesTags: ['users']
        }),

        getUserById: builder.query({
            query: (id) => `/users/show/${id}`,
            providesTags: ['users']
        }),
        createUser: builder.mutation({
            query: (userData) => ({
                url: `/users/create`,
                method: "POST",
                body: userData
            }),
            invalidatesTags: ['users']
        }),
        updateUser: builder.mutation({
            query: ({ id, updatedUserData }) => ({
                url: `/users/update/${id}`,
                method: "PUT",
                body: updatedUserData
            }),
            invalidatesTags: ['users']
        }),
        softDeleteUser: builder.mutation({
            query: ({ id, softDeletedUserData }) => ({
                url: `/users/soft-delete/${id}`,
                method: "POST",
                body: softDeletedUserData
            }),
            invalidatesTags: ['users']
        }),

        restoreDeletedUser: builder.mutation({
            query: (id) => ({
                url: `/users/restore/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['users']
        }),

        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData
            })
        }),

        loginUser: builder.mutation({
            query: (userData) => ({
                url: "/auth/login",
                method: "POST",
                body: userData
            })
        }),

    })
})

export const {
    useGetUsersQuery,
    useGetAllUserQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useSoftDeleteUserMutation,
    useRestoreDeletedUserMutation,
    useRegisterUserMutation,
    useLoginUserMutation
} = userApi;