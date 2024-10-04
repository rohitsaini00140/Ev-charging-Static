import { configureStore } from "@reduxjs/toolkit";
import { clusterApi } from "../cluster/clusterApis";
import { zoneApi } from "../zone/zoneApis";
import { userApi } from "../userAuth/userApis";
import { projectApi } from "../projects/projectsApis";
import clusterSlices from "../cluster/clusterSlices";
import zoneSlices from "../zone/zoneSlices";

export const store = configureStore({
    reducer: {
        [clusterApi.reducerPath]: clusterApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
         
        cluster: clusterSlices,
        zone: zoneSlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            clusterApi.middleware,
            zoneApi.middleware,
            userApi.middleware,
            projectApi.middleware
        )
})