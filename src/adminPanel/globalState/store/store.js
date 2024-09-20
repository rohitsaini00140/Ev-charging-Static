import { configureStore } from "@reduxjs/toolkit";
import { organizationApi } from "../organization/organizationApis";
import { zoneApi } from "../zone/zoneApis";
import organizationSlices from "../organization/organizationSlices";
import zoneSlices from "../zone/zoneSlices";

export const store = configureStore({
    reducer: {
        [organizationApi.reducerPath]: organizationApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        organization: organizationSlices,
        zone: zoneSlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            organizationApi.middleware,
            zoneApi.middleware
        )
})