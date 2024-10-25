import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clusterApi = createApi({
    reducerPath: "clusterApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://143.110.178.49/ev-charging-backend/api"
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
                url: `/clusters`
            }),
            providesTags: ['cluster'],
        }),

        getClusters: builder.query({
            query: ({ page }) => `/clusters/list?page=${page}`,
            providesTags: ['cluster'],
        }),

        getClusterById: builder.query({
            query: (id) => `/clusters/show/${id}`,
            providesTags: ['cluster'],
        }),

        getFilteredCluster: builder.query({
            query: ({ clusterName, page, countryName, stateName, cityName, status }) => {
                const params = new URLSearchParams();
                console.log(clusterName)
                if (page) params.append('page', page);
                if (clusterName) params.append('cluster_name', clusterName);
                if (countryName) params.append('country_name', countryName);
                if (stateName) params.append('state_name', stateName);
                if (cityName) params.append('city_name', cityName);
                if (status) params.append('status', status);

                return `/clusters/list?${params.toString()}`;
            },
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
    useGetAllClustersQuery,
    useGetClusterByIdQuery,
    useGetFilteredClusterQuery,
    useUpdateClusterMutation,
    useSoftDeleteClusterMutation,
    useRestoreDeletedClusterMutation
} = clusterApi;
