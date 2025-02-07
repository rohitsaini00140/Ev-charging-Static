import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const devicegunApi = createApi({
  reducerPath: "devicegunsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["deviceguns"],
  endpoints: (builder) => ({
    createdeviceguns: builder.mutation({
      query: (roleData) => ({
        url: "/devicegun/create",
        method: "POST",
        body: roleData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    getGunsList: builder.query({
      query: () => "/devicegun/list",
      providesTags: ["deviceguns"],
    }),

    getDeviceGunByID: builder.query({
      query: (id) => `/devicegun/show/${id}`,
      providesTags: ["devicegun"],
    }),


    
    getAllDeviceGun: builder.query({
      query: () => `/devicegun`,
      providesTags: ["devicegun"],
    }),



    getGunById: builder.query({
      query: (id) => `/devicegun/show/${id}`,
      providesTags: ["deviceguns"],
    }),

    updateGun: builder.mutation({
      query: ({ id, updatedUserData }) => ({
        url: `/devicegun/update/${id}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    softDeleteGun: builder.mutation({
      query: ({ id, softDeletedGunData }) => ({
        url: `/devicegun/soft-delete/${id}`,
        method: "POST",
        body:softDeletedGunData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    restoreDeletedGun: builder.mutation({
      query: (id) => ({
        url: `/devicegun/restore/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["deviceguns"],
    }),
  
  }),
});
export const {
  useCreatedevicegunsMutation,
  useGetGunsListQuery,
  useGetDeviceGunByIDQuery,
  useUpdateGunMutation,
  useSoftDeleteGunMutation,
  useRestoreDeletedGunMutation,
  useGetGunByIdQuery,
  useGetAllDeviceGunQuery
} = devicegunApi;
