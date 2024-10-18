import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        pageNo: 1,
        searchProjectKeywords: "",
        projectStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setProjectListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setProjectKeywords: (state, action) => {
            state.searchProjectKeywords = action.payload
        },
        setProjectStatus: (state, action) => {
            state.projectStatus = action.payload
        }
    },
});

export const {
    setProjectListPageNo,
    setProjectKeywords,
    setProjectStatus
} = projectSlice.actions;

export default projectSlice.reducer;