import { configureStore } from "@reduxjs/toolkit";
import { clusterApi } from "../cluster/clusterApis";
import { zoneApi } from "../zone/zoneApis";
import { userApi } from "../userAuth/userApis";
import { googleMapApi } from "../googleMap/googleMapApis";
import { addressApi } from "../address/addressApi";
import clusterSlices from "../cluster/clusterSlices";
import zoneSlices from "../zone/zoneSlices";
import googleMapSlices from "../googleMap/googleMapSlices";
import addressSlices from "../address/addressSlices";

export const store = configureStore({
    reducer: {
        [clusterApi.reducerPath]: clusterApi.reducer,
        [zoneApi.reducerPath]: zoneApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [googleMapApi.reducerPath]: googleMapApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        cluster: clusterSlices,
        zone: zoneSlices,
        googleMap: googleMapSlices,
        address: addressSlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            clusterApi.middleware,
            zoneApi.middleware,
            userApi.middleware,
            googleMapApi.middleware,
            addressApi.middleware
        )
})