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
      query: ({ page }) => `ocpp/data?page=${page}`,  // ✅ Ensure that `page` is added
      providesTags: ["Charger"],
    }),

    getChargersWithFilter: builder.query({
      query: ({ deviceID }) => `ocpp/data?deviceID=${deviceID}`,
      providesTags: ["Charger"],
    }),



  }),
});

// Export the hook
export const { useGetChargersQuery,useGetChargersWithPaginationQuery,useGetChargersWithFilterQuery, } = chargerApi;

