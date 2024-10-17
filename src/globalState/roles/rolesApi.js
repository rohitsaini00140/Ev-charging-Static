import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rolesApi = createApi({
    reducerPath: "rolesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api",
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

        getAllRoles: builder.query({
            query: () => `/roles`,
            providesTags: ['Roles']
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
    useGetAllRolesQuery,
    useSoftDeleteRoleMutation,
    useRestoreDeletedRoleMutation
} = rolesApi;