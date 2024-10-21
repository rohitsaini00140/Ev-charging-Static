import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        pageNo: 1,
        role: "",
        roleStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setRoleListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
        setRoleStatus: (state, action) => {
            state.roleStatus = action.payload
        },
    },
});

export const {
    setRoleListPageNo,
    setRole,
    setRoleStatus
} = roleSlice.actions;

export default roleSlice.reducer;