import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chargerApi = createApi({
  reducerPath: "chargerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api/",
  }),
  tagTypes: ["Charger"],
  endpoints: (builder) => ({
    getChargers: builder.query({
      query: () => "ocpp/devices", // GET request to /devices
      providesTags: ["Charger"],
    }),

    getChargersWithPagination: builder.query({
      query: ({ page,log_page }) =>
        `ocpp/data?page=${page}&log_page=${log_page}`, 
      providesTags: ["Charger"],
    }),


    getChargersWithLogPagination: builder.query({
      query: ({ log_page = 1 }) => `ocpp/data?log_page=${log_page}`,
      providesTags: ["Charger"],
    }),
    


    getChargersWithFilter: builder.query({
      query: ({ deviceID,log_page }) => `ocpp/data?deviceID=${deviceID}&log_page=${log_page}`,
      providesTags: ["Charger"],
    }),



  }),
});

// Export the hook
export const { useGetChargersQuery,useGetChargersWithPaginationQuery,useGetChargersWithFilterQuery, useGetChargersWithLogPaginationQuery} = chargerApi;

