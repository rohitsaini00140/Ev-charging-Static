import { configureStore } from "@reduxjs/toolkit";
import { clusterApi } from "../cluster/clusterApis";
import { zoneApi } from "../zone/zoneApis";
import { userApi } from "../userAuth/userApis";
import { projectApi } from "../projects/projectsApis";
import { googleMapApi } from "../googleMap/googleMapApis";
import { addressApi } from "../address/addressApi";
import { adminApi } from "../adminAuth/adminApis";
import { deviceApi } from "../devices/deviceApis";
import clusterSlices from "../cluster/clusterSlices";
import zoneSlices from "../zone/zoneSlices";
import googleMapSlices from "../googleMap/googleMapSlices";
import addressSlices from "../address/addressSlices";
import projectSlice from "../projects/projectsSlices";
import adminSlice from "../adminAuth/adminSlice"
import deviceSlice from "../devices/deviceSlices"

export const store = configureStore({
    reducer: {
        [clusterApi.reducerPath]: clusterApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [googleMapApi.reducerPath]: googleMapApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [deviceApi.reducerPath]: deviceApi.reducer,
        cluster: clusterSlices,
        zone: zoneSlices,
        googleMap: googleMapSlices,
        address: addressSlices,
        project: projectSlice,
        admin: adminSlice,
        device: deviceSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            clusterApi.middleware,
            zoneApi.middleware,
            userApi.middleware,
            projectApi.middleware,
            googleMapApi.middleware,
            addressApi.middleware,
            adminApi.middleware,
            deviceApi.middleware
        )
})