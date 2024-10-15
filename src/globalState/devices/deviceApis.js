import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deviceApi = createApi({
    reducerPath: "deviceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.66.21/ev-charging-backend/api"
    }),
    tagTypes: ["device"],

    endpoints: (builder) => ({
        addDevice: builder.mutation({
            query: (deviceData) => ({
                url: "/devices/create",
                method: "POST",
                body: deviceData,
            }),
            invalidatesTags: ['device']
        }),

        // getDevice: builder.query({
        //     query: ({ page, name, serial_number, type }) => `/devices/list?page=${page}&name=${name}&serial_number=${serial_number}&type=${type}`,
        //     providesTags: ['device']
        // }),

        getDevice: builder.query({
            query: ({ page, name, serial_number, type }) => {
                const params = new URLSearchParams();
                
                if (page) params.append('page', page);
                if (name) params.append('name', name);
                if (serial_number) params.append('serial_number', serial_number);
                if (type) params.append('type', type);

                return `/devices/list?${params.toString()}`;
            },
            providesTags: ['device'],
        }),

        getDeviceByID: builder.query({
            query: (id) => `/devices/show/${id}`
        }),

        updateDevice: builder.mutation({
            query: ({ updatedDeviceData, id }) => ({
                url: `/devices/update/${id}`,
                method: "PUT",
                body: updatedDeviceData,
            }),
            invalidatesTags: ['device']
        }),

        softDeleteDevice: builder.mutation({
            query: ({ id, deletedDeviceData }) => ({
                url: `/devices/soft-delete/${id}`,
                method: "POST",
                body: deletedDeviceData,
            }),
            invalidatesTags: ['device'],
        }),

        restoreDevice: builder.mutation({
            query: (id) => ({
                url: `/devices/restore/${id}`,
                method: "POST",
            }),
            invalidatesTags: ['device'],
        }),

    }),
})
export const {
    useAddDeviceMutation,
    useGetDeviceQuery,
    useGetDeviceByIDQuery,
    useUpdateDeviceMutation,
    useSoftDeleteDeviceMutation,
    useRestoreDeviceMutation
} = deviceApi;
