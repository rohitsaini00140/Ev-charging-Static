import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api/"
    }),
    tagTypes: ["admins"],
    endpoints: (builder) => ({

        getAllAdmin: builder.query({
            query: () => `/users`,
        }),

        getAdmin: builder.query({
            query: (pageNo) => `/users/list?page=${pageNo}`,
            providesTags: ['admins'],
        }),

        getAdminById: builder.query({
            query: (id) => `/users/show/${id}`,
        }),

        createAdmin: builder.mutation({
            query: (adminData) => ({
                url: `/users/create`,
                method: "POST",
                body: adminData
            }),
            invalidatesTags: ['admins']
        }),

        updateAdmin: builder.mutation({
            query: ({ id, updatedAdminData }) => ({
                url: `/users/update/${id}`,
                method: "PUT",
                body: updatedAdminData
            }),
            invalidatesTags: ['admins']
        }),

        softDeleteAdmin: builder.mutation({
            query: ({ id, softDeletedAdminData }) => ({
                url: `/users/soft-delete/${id}`,
                method: "POST",
                body: softDeletedAdminData
            }),
            invalidatesTags: ['admins']
        }),

        restoreDeletedAdmin: builder.mutation({
            query: (id) => ({
                url: `/users/restore/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['admins']
        })

    })
})

export const {
    useGetAdminQuery,
    useGetAllAdminQuery,
    useGetAdminByIdQuery,
    useCreateAdminMutation,
    useUpdateAdminMutation,
    useSoftDeleteAdminMutation,
    useRestoreDeletedAdminMutation
} = adminApi;
