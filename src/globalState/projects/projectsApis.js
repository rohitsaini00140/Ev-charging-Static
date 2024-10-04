import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend",
    }),
    tagTypes: ["Projects"],
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => `/api/projects/list`,
            providesTags: ['Projects'],
        }),
        softDeleteProjects: builder.mutation({
            query: ({ id, softDeletedProjectsData }) => ({
                url: `api/projects/soft-delete/${id}`,
                method: "POST",
                body: softDeletedProjectsData,
            }),
            invalidatesTags: ['Projects'],
        }),
        
        softRestoreProjects: builder.mutation({
            query: ({ id, softRestoredProjectsData }) => ({
                url: `api/projects/restore/${id}`,
                method: "POST",
                body: softRestoredProjectsData,
            }),
            invalidatesTags: ['Projects'],
        }),
    }),
});

// Export the auto-generated hooks
export const { useGetProjectsQuery, useSoftDeleteProjectsMutation,useSoftRestoreProjectsMutation } = projectApi;
