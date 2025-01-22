import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    page:1,
    pageNo: 1,
    cluters_id: "",
    deviceName: "",
    deviceSerialNumber: "",
    deviceType: "",
    deviceID: "",
    deviceUniqueID: "",
    deviceActionType: "",
    deviceStatus: "",
    loading: false,
    error: null,
    from_date: null,
    to_date: null,
    charger_status: "",
    charger_display_id: "",
  },
  reducers: {
    setDeviceListPageNo: (state, action) => {
      state.page = action.payload;
    },

    setDeviceListPageNo1: (state, action) => {
      state.pageNo = action.payload;
    },
    setClutersid: (state, action) => {
      state.cluters_id = action.payload;
    },
    setclusterName: (state, action) => {
      state.setclusterName = action.payload;
    },
    setDeviceName: (state, action) => {
      state.deviceName = action.payload;
    },
    setDeviceSerialNumber: (state, action) => {
      state.deviceSerialNumber = action.payload;
    },
    setDeviceType: (state, action) => {
      state.deviceType = action.payload;
    },
    setDeviceID: (state, action) => {
      state.deviceID = action.payload;
    },
    setDeviceUniqueID: (state, action) => {
      state.deviceUniqueID = action.payload;
    },
    setDeviceActionType: (state, action) => {
      state.deviceActionType = action.payload;
    },
    setDeviceStatus: (state, action) => {
      state.deviceStatus = action.payload;
    },

    setfrom_date: (state, action) => {
      state.from_date = action.payload;
    },
    setto_date: (state, action) => {
      state.to_date = action.payload;
    },
    setCharger_status: (state, action) => {
      state.charger_status = action.payload;
    },
    setcharger_display_id: (state, action) => {
      state.charger_display_id = action.payload;
    },
  },
});

export const {
  setDeviceListPageNo,
  setDeviceListPageNo1,
  setDeviceName,
  setClutersid,
  setDeviceSerialNumber,
  setDeviceType,
  setDeviceID,
  setDeviceUniqueID,
  setDeviceActionType,
  setDeviceStatus,
  setfrom_date,
  setto_date,
  setCharger_status,
  setcharger_display_id,
} = deviceSlice.actions;

export default deviceSlice.reducer;
