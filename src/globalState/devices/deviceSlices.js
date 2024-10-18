import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        pageNo: 1,
        deviceName: "",
        deviceSerialNumber: "",
        deviceType: "",
        deviceStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setDeviceListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setDeviceName: (state, action) => {
            state.deviceName = action.payload
        },
        setDeviceSerialNumber: (state, action) => {
            state.deviceSerialNumber = action.payload
        },
        setDeviceType: (state, action) => {
            state.deviceType = action.payload
        },
        setDeviceStatus: (state, action) => {
            state.deviceStatus = action.payload
        },
    },
});

export const {
    setDeviceListPageNo,
    setDeviceName,
    setDeviceSerialNumber,
    setDeviceType,
    setDeviceStatus
} = deviceSlice.actions;

export default deviceSlice.reducer;