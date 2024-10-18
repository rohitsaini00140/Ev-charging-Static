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
            query: ({ page, clusterName, projectName, userName, status }) => {
                const params = new URLSearchParams();

                if (page) params.append('page', page);
                if (clusterName) params.append('cluster_name', clusterName);
                if (projectName) params.append('project_name', projectName);
                if (userName) params.append('user_name', userName);
                if (status) params.append('status', status);

                return `/clusters/list?${params.toString()}`;
            },
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