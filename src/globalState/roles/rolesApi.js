import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rolesApi = createApi({
    reducerPath: "rolesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://143.110.178.49/ev-charging-backend/api",
    }),
    tagTypes: ["Roles"],
    endpoints: (builder) => ({

        createRoles: builder.mutation({
            query: (roleData) => ({
                url: "/roles/create",
                method: "POST",
                body: roleData,
            }),
            invalidatesTags: ['Roles']
        }),
        getRoles: builder.query({
            query: () => `/roles`,
            providesTags: ['Roles']
        }),
        getAllRoles: builder.query({
            query: ({ status,roleName }) => `/roles/list?status=${status}&role_name=${roleName}`,
            providesTags: ['Roles']
        }),
        getRoleById: builder.query({
            query: (id) => `/roles/show/${id}`,
            providesTags: ['Roles']
        }),
        updateRole: builder.mutation({
            query: ({ updatedRoleData, id }) => ({
                url: `/roles/update/${id}`,
                method: "PUT",
                body: updatedRoleData,
            }),
            invalidatesTags: ['Roles']
        }),
        softDeleteRole: builder.mutation({
            query: ({ id, softDeletedRoleData }) => ({
                url: `/roles/soft-delete/${id}`,
                method: "POST",
                body: softDeletedRoleData,
            }),
            invalidatesTags: ['Roles'],
        }),
        restoreDeletedRole: builder.mutation({
            query: (id) => ({
                url: `/roles/restore/${id}`,
                method: "POST",
            }),
            invalidatesTags: ['Roles'],
        }),

    }),
});
export const {
    useCreateRolesMutation,
    useUpdateRoleMutation,
    useGetAllRolesQuery,
    useGetRolesQuery,
    useGetRoleByIdQuery,
    useSoftDeleteRoleMutation,
    useRestoreDeletedRoleMutation
} = rolesApi;