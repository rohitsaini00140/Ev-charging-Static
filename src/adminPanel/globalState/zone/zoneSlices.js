import { createSlice } from "@reduxjs/toolkit";

const zoneSlice = createSlice({
    name: 'zone',
    initialState: {
        pageNo: JSON.parse(sessionStorage.getItem('zoneListPageNo')) || 1,
        loading: false,
        error: null,
    },
    reducers: {
        setZoneListPageNo: (state, action) => {
            state.pageNo = action.payload
        }
    },
});

export const {
    setZoneListPageNo
} = zoneSlice.actions;

export default zoneSlice.reducer;