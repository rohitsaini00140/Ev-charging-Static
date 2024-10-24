import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        logInRole: JSON.parse(sessionStorage.getItem("role")) || "",
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
        setLogIn: (state, action) => {
            state.logInRole = action.payload
        }
    },
});

export const {
    setRoleListPageNo,
    setRole,
    setRoleStatus,
    setLogIn
} = roleSlice.actions;

export default roleSlice.reducer;