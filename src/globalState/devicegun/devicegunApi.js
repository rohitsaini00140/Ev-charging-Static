import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const devicegunApi = createApi({
  reducerPath: "devicegunsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["deviceguns"],
  endpoints: (builder) => ({
    createdeviceguns: builder.mutation({
      query: (devicegunData) => ({
        url: "/devicegun/create",
        method: "POST",
        body: devicegunData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    getDeviceGunsList: builder.query({
      query: () => {
        return {
          url: `/devicegun/list`,
          method: "GET",
        };
      },
      providesTags: ["deviceguns"],
    }),
    

    getDeviceGunByID: builder.query({
      query: (id) => `/devicegun/show/${id}`,
      providesTags: ["deviceguns"],
    }),


    
    getAllDeviceGun: builder.query({
      query: () => `/devicegun`,
      providesTags: ["devicegun"],
    }),


    getAllDeviceWithmaxgun: builder.query({
      query: () => `/devicegun/deviceWithMaxGun`,
      providesTags: ["devicegun"],
    }),




    updateDeviceGun: builder.mutation({
      query: ({ id,updatedDeviceGunData}) => ({
        url: `/devicegun/update/${id}`,
        method: "PUT",
        body: updatedDeviceGunData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    softDeleteDeviceGun: builder.mutation({
      query: ({ id, softDeletedDeviceGunData }) => ({
        url: `/devicegun/destroy/${id}`,
        method: "POST",
        body:softDeletedDeviceGunData,
      }),
      invalidatesTags: ["deviceguns"],
    }),

    restoreDeletedDeviceGun: builder.mutation({
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
  useGetDeviceGunsListQuery,
  useGetDeviceGunByIDQuery,
  useUpdateDeviceGunMutation,
  useSoftDeleteDeviceGunMutation,
  useRestoreDeletedDeviceGunMutation,
  useGetAllDeviceGunQuery,
  useGetAllDeviceWithmaxgunQuery
} = devicegunApi;
