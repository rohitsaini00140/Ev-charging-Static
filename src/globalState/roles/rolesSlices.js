import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        pageNo: 1,
        roleName: "",
        loading: false,
        error: null,
    },
    reducers: {
        setRoleListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setRoleName: (state, action) => {
            state.roleName = action.payload
        }
    },
});

export const {
    setRoleListPageNo,
    setRoleName
} = roleSlice.actions;

export default roleSlice.reducer;