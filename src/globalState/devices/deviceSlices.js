import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        page: 1,
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
        startDate: null,
        endDate: null,
        charger_status: "",
    },
    reducers: {
        setDeviceListPageNo: (state, action) => {
            state.page = action.payload
        },
        setClutersid: (state, action) => {
            state.cluters_id = action.payload
        },
        setclusterName: (state, action) => {
            state.setclusterName = action.payload
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
        setDeviceID: (state, action) => {
            state.deviceID = action.payload
        },
        setDeviceUniqueID: (state, action) => {
            state.deviceUniqueID = action.payload
        },
        setDeviceActionType: (state, action) => {
            state.deviceActionType = action.payload
        },
        setDeviceStatus: (state, action) => {
            state.deviceStatus = action.payload
        },

        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        setCharger_status: (state, action) => {
            state.charger_status = action.payload;
        },
    },
});

export const {
    setDeviceListPageNo,
    setDeviceName,
    setClutersid,
    setDeviceSerialNumber,
    setDeviceType,
    setDeviceID,
    setDeviceUniqueID,
    setDeviceActionType,
    setDeviceStatus,
    setStartDate,
    setEndDate,
    setCharger_status,
} = deviceSlice.actions;

export default deviceSlice.reducer;