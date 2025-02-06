import { configureStore } from "@reduxjs/toolkit";
import { clusterApi } from "../cluster/clusterApis";
import { projectApi } from "../projects/projectsApis";
import { googleMapApi } from "../googleMap/googleMapApis";
import { addressApi } from "../address/addressApi";
import { userApi } from "../user/userApis";
import { deviceApi } from "../devices/deviceApis";
import { rolesApi } from "../roles/rolesApi";
import { permissionsApi } from "../permission/permissionApis";
import clusterSlices from "../cluster/clusterSlices";
import googleMapSlices from "../googleMap/googleMapSlices";
import addressSlices from "../address/addressSlices";
import projectSlice from "../projects/projectsSlices";
import userSlice from "../user/userSlice";
import deviceSlice from "../devices/deviceSlices";
import rolesSlice from "../roles/rolesSlices";
import permissionSlice from "../permission/permissionSlices";
import { chargerApi } from "../charger/chargerApi";
import chargerSlice from '../charger/ChargerSlice'
import { cpoApi } from "../Cpos/cpoApi";
import cpoSlice from "../Cpos/cpoSlice"
import { gunsApi } from "../gunType/gunApi";
import gunsSlice from '../gunType/gunSlice'

export const store = configureStore({
  reducer: {
    [clusterApi.reducerPath]: clusterApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [googleMapApi.reducerPath]: googleMapApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [deviceApi.reducerPath]: deviceApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [permissionsApi.reducerPath]: permissionsApi.reducer,
    [chargerApi.reducerPath]: chargerApi.reducer,
    [cpoApi.reducerPath]:cpoApi.reducer,
    [gunsApi.reducerPath]:gunsApi.reducer,
    cluster: clusterSlices,
    googleMap: googleMapSlices,
    address: addressSlices,
    project: projectSlice,
    user: userSlice,
    device: deviceSlice,
    role: rolesSlice,
    permission: permissionSlice,
    charger: chargerSlice,
    cpo: cpoSlice,
    gun:gunsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      clusterApi.middleware,
      projectApi.middleware,
      googleMapApi.middleware,
      addressApi.middleware,
      userApi.middleware,
      deviceApi.middleware,
      rolesApi.middleware,
      permissionsApi.middleware,
      chargerApi.middleware,
      cpoApi.middleware,
      gunsApi.middleware,
    ),
});
