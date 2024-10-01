import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clusterApi = createApi({
    reducerPath: "clusterApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend"
    }),
    tagTypes: ["cluster"],
    endpoints: (builder) => ({
        addCluster: builder.mutation({
            query: (clusterData) => ({
                url: "/api/organizations/create",
                method: "POST",
                body: clusterData,
            }),
            invalidatesTags: ['cluster']
        }),
        getClusters: builder.query({
            query: ({ page }) => ({
                url: `/api/organizations/list?page=${page}`
            }),
            providesTags: ['cluster'],
        }),
        // getClusterById: builder.query({
        //     query: (id) => `/clusters/${id}`, // API endpoint to fetch cluster by id
        // }),
        updateCluster: builder.mutation({
            query: ({ id, updatedClusterData }) => ({
                url: `/api/organizations/update/${id}`,
                method: "PUT",
                body: updatedClusterData
            }),
            invalidatesTags: ['cluster']
        }),
        softDeleteCluster: builder.mutation({
            query: ({ id, softDeletedClusterData }) => ({
                url: `api/organizations/soft-delete/${id}`,
                method: "POST",
                body: softDeletedClusterData
            }),
            invalidatesTags: ['cluster']
        }),
        restoreDeletedCluster: builder.mutation({
            query: (id) => ({
                url: `api/organizations/restore/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['cluster']
        })
    }),
})

export const {
    useAddClusterMutation,
    useGetClustersQuery,
    useUpdateClusterMutation,
    useSoftDeleteClusterMutation,
    useRestoreDeletedClusterMutation
} = clusterApi;
