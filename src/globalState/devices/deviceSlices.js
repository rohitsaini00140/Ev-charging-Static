import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        pageNo: 1,
        loading: false,
        error: null,
    },
    reducers: {
        setClusterListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
    },
});

export const {
    setDeviceListPageNo
} = deviceSlice.actions;

export default deviceSlice.reducer;