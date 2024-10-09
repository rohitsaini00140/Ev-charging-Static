import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend",
    }),
    tagTypes: ["Projects"],
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: ({page}) => `/api/projects/list?page=${page}`,
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
            query: (id) => ({
                url: `api/projects/restore/${id}`,
                method: "POST",
            }),
            invalidatesTags: ['Projects'],
        }),
        addProjects: builder.mutation({
            query: (projectsData) => ({
                url: "/api/projects/create",
                method: "POST",
                body: projectsData,
            }),
            invalidatesTags: ['cluster']
        }),


    }),
});
export const { useGetProjectsQuery, useSoftDeleteProjectsMutation,useSoftRestoreProjectsMutation,useAddProjectsMutation } = projectApi;
