import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chargerApi = createApi({
  reducerPath: "chargerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api/ocpp/",
  }),
  tagTypes: ["Charger"],
  endpoints: (builder) => ({
    getChargers: builder.query({
      query: () => "devices", // GET request to /devices
      providesTags: ["Charger"],
    }),
  }),
});

// Export the hook
export const { useGetChargersQuery } = chargerApi;

