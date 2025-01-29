import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chargerApi = createApi({
  reducerPath: "chargerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.110.178.49/ev-charging-backend/api",
  }),
  tagTypes: ["charger"],
  endpoints: (builder) => ({}),
});

export const {} = chargerApi;
