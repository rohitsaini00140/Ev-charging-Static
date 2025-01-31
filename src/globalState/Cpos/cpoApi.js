import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cpoApi = createApi({
  reducerPath: "cpoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["cpo"],

  endpoints: (builder) => ({
    createCpo: builder.mutation({
      query: (roleData) => ({
        url: "/cpos/create",
        method: "POST",
        body: roleData,
      }),
      invalidatesTags: ["cpo"],
    }),

      getCpo: builder.query({
        query: ({ page, name, status }) => {
          const params = new URLSearchParams();
          if (page) params.append("page", page);
          if (name) params.append("name", name);
          if (status) params.append("status", status);
          return `/cpos/list?${params.toString()}`;
        },
        providesTags: ["cpo"],
      }),


    getCpoById: builder.query({
      query: (id) => `/cpos/show/${id}`,
      providesTags: ["cpo"],
    }),

    updateCpo: builder.mutation({
      query: ({ id, updatedUserData }) => ({
        url: `/cpos/update/${id}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["cpo"],
    }),

    softDeleteCpo: builder.mutation({
      query: ({ id, softDeletedCpoData }) => ({
        url: `/cpos/soft-delete/${id}`,
        method: "POST",
        body: softDeletedCpoData,
      }),
      invalidatesTags: ["cpo"],
    }),

    restoreDeletedCpo: builder.mutation({
      query: (id) => ({
        url: `/cpos/restore/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["cpo"],
    }),
  }),
});

export const {
  useCreateCpoMutation,
  useGetCpoQuery,
  useGetCpoByIdQuery,
  useUpdateCpoMutation,
  useSoftDeleteCpoMutation,
  useRestoreDeletedCpoMutation,
} = cpoApi;
