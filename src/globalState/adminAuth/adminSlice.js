import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        pageNo: 1,
        adminName: "",
        loading: false,
        error: null,
    },
    reducers: {
        setAdminPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setAdminName: (state, action) => {
            state.adminName = action.payload
        }
    },
});

export const {
    setAdminName,
    setAdminPageNo
} = adminSlice.actions;

export default adminSlice.reducer;