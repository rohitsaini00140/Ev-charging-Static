import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gunsApi = createApi({
  reducerPath: "gunsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["guns"],
  endpoints: (builder) => ({
    createguns: builder.mutation({
      query: (roleData) => ({
        url: "/guntypes/create",
        method: "POST",
        body: roleData,
      }),
      invalidatesTags: ["guns"],
    }),

    getGunsList: builder.query({
      query: () => "/guntypes/list",
      providesTags: ["guns"],
    }),

    getAllGuntype: builder.query({
      query: () => `/guntypes`,
      providesTags: ["guns"],
    }),

    getGunById: builder.query({
      query: (id) => `/guntypes/show/${id}`,
      providesTags: ["guns"],
    }),

    updateGun: builder.mutation({
      query: ({ id, updatedUserData }) => ({
        url: `/guntypes/update/${id}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["guns"],
    }),

    softDeleteGun: builder.mutation({
      query: ({ id, softDeletedGunData }) => ({
        url: `/guntypes/soft-delete/${id}`,
        method: "POST",
        body:softDeletedGunData,
      }),
      invalidatesTags: ["guns"],
    }),

    restoreDeletedGun: builder.mutation({
      query: (id) => ({
        url: `/guntypes/restore/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["guns"],
    }),
  
  }),
});
export const {
  useCreategunsMutation,
  useGetGunsListQuery,
  useUpdateGunMutation,
  useSoftDeleteGunMutation,
  useRestoreDeletedGunMutation,
  useGetGunByIdQuery,
  useGetAllGuntypeQuery,
} = gunsApi;
