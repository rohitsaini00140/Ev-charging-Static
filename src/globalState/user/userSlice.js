import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        pageNo: 1,
        userName: "",
        status: "",
        loading: false,
        error: null,
    },
    reducers: {
        setUserListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setUserStatus: (state, action) => {
            state.status = action.payload
        }
    },
});

export const {
    setUserName,
    setUserListPageNo,
    setUserStatus
} = userSlice.actions;

export default userSlice.reducer;