import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        pageNo: 1,
        roleName: "",
        roleStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setRoleListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setRoleName: (state, action) => {
            state.roleName = action.payload
        },
        setRoleStatus: (state, action) => {
            state.roleStatus = action.payload
        },
    },
});

export const {
    setRoleListPageNo,
    setRoleName,
    setRoleStatus
} = roleSlice.actions;

export default roleSlice.reducer;