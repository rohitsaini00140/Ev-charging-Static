import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api",
    }),
    tagTypes: ["Projects"],
    endpoints: (builder) => ({

        addProjects: builder.mutation({
            query: (projectsData) => ({
                url: "/projects/create",
                method: "POST",
                body: projectsData,
            }),
            invalidatesTags: ['Projects']
        }),

        getAllProjects: builder.query({
            query: () => `/projects`,
            providesTags: ['Projects']
        }),

        getProjects: builder.query({
            query: ({ page }) => `/projects/list?page=${page}`,
            providesTags: ['Projects']
        }),

        getFilteredProjects: builder.query({
            query: ({ page, clusterName, projectName, userName }) => `/projects/list?page=${page}&project_name=${projectName}&cluster_name=${clusterName}&user_name=${userName}`,
            providesTags: ['Projects']
        }),

        getProjectById: builder.query({
            query: (id) => `/projects/show/${id}`,
        }),

        updateProjects: builder.mutation({
            query: ({ id, updatedProjectData }) => ({
                url: `/projects/update/${id}`,
                method: "PUT",
                body: updatedProjectData,
            }),
            invalidatesTags: ['Projects']
        }),

        softDeleteProjects: builder.mutation({
            query: ({ id, softDeletedProjectsData }) => ({
                url: `/projects/soft-delete/${id}`,
                method: "POST",
                body: softDeletedProjectsData,
            }),
            invalidatesTags: ['Projects'],
        }),

        softRestoreProjects: builder.mutation({
            query: (id) => ({
                url: `/projects/restore/${id}`,
                method: "POST",
            }),
            invalidatesTags: ['Projects'],
        }),

    }),
});
export const {
    useAddProjectsMutation,
    useGetAllProjectsQuery,
    useGetProjectsQuery,
    useGetFilteredProjectsQuery,
    useGetProjectByIdQuery,
    useUpdateProjectsMutation,
    useSoftDeleteProjectsMutation,
    useSoftRestoreProjectsMutation
} = projectApi;