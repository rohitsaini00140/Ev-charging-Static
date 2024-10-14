import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        adminName: "",
        loading: false,
        error: null,
    },
    reducers: {
        setAdminName: (state, action) => {
            state.adminName = action.payload
        }
    },
});

export const {
    setAdminName
} = adminSlice.actions;

export default adminSlice.reducer;