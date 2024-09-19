import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const organizationApi = createApi({
    reducerPath: "organizationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21"
    }),
    tagTypes: ["organization"],
    endpoints: (builder) => ({
        addOrganization: builder.mutation({
            query: (organizationData) => ({
                url: "/api/organizations/create",
                method: "POST",
                body: organizationData,
            }),
            invalidatesTags: ['organization']
        }),
        getOrganization: builder.query({
            query: () => "/api/organizations/list",
            providesTags: ['organization'],
        }),
    }),
})

export const {
    useAddOrganizationMutation,
    useGetOrganizationQuery
} = organizationApi;