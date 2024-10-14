import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        pageNo: 1,
        searchProjectKeywords: "",
        loading: false,
        error: null,
    },
    reducers: {
        setProjectListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setProjectKeywords: (state, action) => {
            state.searchProjectKeywords = action.payload
        }
    },
});

export const {
    setProjectListPageNo,
    setProjectKeywords
} = projectSlice.actions;

export default projectSlice.reducer;