import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rolesApi = createApi({
    reducerPath: "rolesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api",
    }),
    tagTypes: ["Roles"],
    endpoints: (builder) => ({

        getAllRoles: builder.query({
            query: () => `/roles`,
            providesTags: ['Roles']
        }),

    }),
});
export const {
    useGetAllRolesQuery
} = rolesApi;