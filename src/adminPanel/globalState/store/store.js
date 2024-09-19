import { configureStore } from "@reduxjs/toolkit";
import { organizationApi } from "../organization/organizationApis";

export const store = configureStore({
    reducer: {
        [organizationApi.reducerPath]: organizationApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            organizationApi.middleware
        )
})