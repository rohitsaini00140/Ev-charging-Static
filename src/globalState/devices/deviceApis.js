import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["device"],

  endpoints: (builder) => ({
    addDevice: builder.mutation({
      query: (deviceData) => ({
        url: "/devices/create",
        method: "POST",
        body: deviceData,
      }),
      invalidatesTags: ["device"],
    }),

    getDevice: builder.query({
      query: ({
        page,
        cluster_name,
        project_name,
        device_name,
        deviceID,
        status,
      }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (cluster_name) params.append("cluster_name", cluster_name);
        if (project_name) params.append("project_name", project_name);
        if (device_name) params.append("device_name", device_name);
        if (deviceID) params.append("deviceID", deviceID);
        if (status) params.append("status", status);

        return `/devices/list?${params.toString()}`;
      },
      providesTags: ["device"],
    }),

    getDeviceByID: builder.query({
      query: (id) => `/devices/show/${id}`,
      providesTags: ["device"],
    }),

    getAllDevice: builder.query({
      query: () => `/devices`,
      providesTags: ["device"],
    }),

    updateDevice: builder.mutation({
      query: ({ updatedDeviceData, id }) => ({
        url: `/devices/update/${id}`,
        method: "PUT",
        body: updatedDeviceData,
      }),
      invalidatesTags: ["device"],
    }),

    softDeleteDevice: builder.mutation({
      query: ({ id, deletedDeviceData }) => ({
        url: `/devices/soft-delete/${id}`,
        method: "POST",
        body: deletedDeviceData,
      }),
      invalidatesTags: ["device"],
    }),

    restoreDevice: builder.mutation({
      query: (id) => ({
        url: `/devices/restore/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["device"],
    }),

    getDeviceLogs: builder.query({
      query: ({
        deviceID,
        action,
        uniqueId,
        page,
        start_date,
        end_date,
        charger_status,
      }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (deviceID) params.append("deviceID", deviceID);
        if (action) params.append("event_name", action);
        if (uniqueId) params.append("uniqueId", uniqueId);
        if (start_date) params.append("start_date", start_date);
        if (end_date) params.append("end_date", end_date);
        if (charger_status) params.append("charger_status", charger_status);

        return `/devices/device-data?${params.toString()}`;
      },
      providesTags: ["device"],
    }),

    // New endpoint for fetching posts
    getPosts: builder.query({
      query: (page = 1) => ({
        url: `http://143.110.178.49/ev-charging-backend/api/charger-logs?page=${page}`,
        method: "GET",
      }),
    }),

    
  }),
});
export const {
  useAddDeviceMutation,
  useGetDeviceQuery,
  useGetAllDeviceQuery,
  useGetDeviceByIDQuery,
  useUpdateDeviceMutation,
  useSoftDeleteDeviceMutation,
  useRestoreDeviceMutation,
  useGetDeviceLogsQuery,
  useGetPostsQuery,
} = deviceApi;
