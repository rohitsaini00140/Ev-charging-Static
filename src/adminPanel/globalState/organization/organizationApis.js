import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const organizationApi = createApi({
    reducerPath: "organizationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21"
    }),
    tagTypes: ["organization"],
    endpoints: (builder) => ({
        addOrganization: builder.mutation({
            query: (organizationData) => ({
                url: "/api/organizations/create",
                method: "POST",
                body: organizationData,
            }),
            invalidatesTags: ['organization']
        }),
        getOrganization: builder.query({
            query: ({ page }) => ({
                url: `/api/organizations/list?page=${page}`
            }),
            providesTags: ['organization'],
        }),
        updateOrganization: builder.mutation({
            query: ({ id, updatedOrganizationData }) => ({
                url: `/api/organizations/update/${id}`,
                method: "PUT",
                body: updatedOrganizationData
            }),
            invalidatesTags: ['organization']
        }),
        softDeleteOrganization: builder.mutation({
            query: ({ id, softDeletedOrganizationData }) => ({
                url: `api/organizations/soft-delete/${id}`,
                method: "POST",
                body: softDeletedOrganizationData
            }),
            invalidatesTags: ['organization']
        }),
        restoreDeletedOrganization: builder.mutation({
            query: (id) => ({
                url: `api/organizations/restore/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['organization']
        })
    }),
})

export const {
    useAddOrganizationMutation,
    useGetOrganizationQuery,
    useUpdateOrganizationMutation,
    useSoftDeleteOrganizationMutation,
    useRestoreDeletedOrganizationMutation
} = organizationApi;
