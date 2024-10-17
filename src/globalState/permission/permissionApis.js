import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const permissionsApi = createApi({
    reducerPath: "permissionsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api",
    }),
    tagTypes: ["Permissions"],
    endpoints: (builder) => ({

        getAllPermissions: builder.query({
            query: () => `/permissions`,
            providesTags: ['Permissions']
        }),

    }),
});
export const {
    useGetAllPermissionsQuery,
} = permissionsApi;