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

    }),
});
export const {
    useCreateRolesMutation,
    useGetAllRolesQuery
} = rolesApi;