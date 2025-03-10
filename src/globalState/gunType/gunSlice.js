import { createSlice } from "@reduxjs/toolkit";

const gunsSlice = createSlice({
    name: 'guns',
    initialState: {
        page: 1,
        guns: "",
        gunsStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setGunsListPageNo: (state, action) => {
            state.page = action.payload
        },
        setGuns: (state, action) => {
            state.guns = action.payload
        },
        setGunsStatus: (state, action) => {
            state.gunsStatus = action.payload
        },
      
    },
});

export const {
    setGunsListPageNo,
    setGuns,
    setGunsStatus,
} = gunsSlice.actions;

export default gunsSlice.reducer;