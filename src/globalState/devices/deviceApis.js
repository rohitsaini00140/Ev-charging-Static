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




    updateDeviceOccp: builder.mutation({
      query: ({ updatedDeviceData}) => ({
        url: `/update-device-interval`,
        method: "POST",
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

    filterChargerLogs: builder.query({
      query: ({ page, from_date, to_date, charger_display_id, action }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (from_date) params.append("from_date", from_date);
        if (to_date) params.append("to_date", to_date);
        if (charger_display_id)
          params.append("charger_display_id", charger_display_id);
        if (action) params.append("action", action);
        return `/charger-logs?${params.toString()}`;
      },
    }),
  }),
});

export const {
  useAddDeviceMutation,
  useGetDeviceQuery,
  useGetAllDeviceQuery,
  useGetDeviceByIDQuery,
  useUpdateDeviceMutation,
  useUpdateDeviceOccpMutation,
  useSoftDeleteDeviceMutation,
  useRestoreDeviceMutation,
  useGetDeviceLogsQuery,
  useFilterChargerLogsQuery, // New hook for filtering charger logs
} = deviceApi;
