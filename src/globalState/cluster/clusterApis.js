import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clusterApi = createApi({
    reducerPath: "clusterApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api"
    }),
    tagTypes: ["cluster"],
    endpoints: (builder) => ({
        addCluster: builder.mutation({
            query: (clusterData) => ({
                url: "/clusters/create",
                method: "POST",
                body: clusterData,
            }),
            invalidatesTags: ['cluster']
        }),
        getAllClusters: builder.query({
            query: () => ({
                url: `/api/clusters`
            }),
            providesTags: ['cluster'],
        }),

        getClusters: builder.query({
            query: ({ page }) => `/clusters/list?page=${page}`,
            providesTags: ['cluster'],
        }),

        getClusterById: builder.query({
            query: (id) => `/clusters/show/${id}`,
        }),

        getFilteredCluster: builder.query({
            query: ({ clusterName, page, countryId }) => `/clusters/list?page=${page}&cluster_name=${clusterName}&country_name=${countryId}`,
            providesTags: ['cluster']
        }),

        updateCluster: builder.mutation({
            query: ({ id, updatedClusterData }) => ({
                url: `/clusters/update/${id}`,
                method: "PUT",
                body: updatedClusterData
            }),
            invalidatesTags: ['cluster']
        }),

        softDeleteCluster: builder.mutation({
            query: ({ id, softDeletedClusterData }) => ({
                url: `/clusters/soft-delete/${id}`,
                method: "POST",
                body: softDeletedClusterData
            }),
            invalidatesTags: ['cluster']
        }),

        restoreDeletedCluster: builder.mutation({
            query: (id) => ({
                url: `/clusters/restore/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['cluster']
        })
    }),
})
export const {
    useAddClusterMutation,
    useGetClustersQuery,
<<<<<<< HEAD
    useGetAllClustersQuery,
=======
    useGetClusterByIdQuery,
    useGetFilteredClusterQuery,
>>>>>>> 0f053c7021980869c17df0174aeffa012a93dbce
    useUpdateClusterMutation,
    useSoftDeleteClusterMutation,
    useRestoreDeletedClusterMutation
} = clusterApi;
