import { createSlice } from "@reduxjs/toolkit";

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        pageNo: 1,
        searchClusterKeywords: "",
        clusterName: "",
        clusterStatus: "",
        loading: false,
        error: null,
    },
    reducers: {
        setClusterListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setClusterKeywords: (state, action) => {
            state.searchClusterKeywords = action.payload
        },
        setClusterName: (state, action) => {
            state.clusterName = action.payload
        },
        setClusterStatus: (state, action) => {
            state.clusterStatus = action.payload
        }
    },
});

export const {
    setClusterListPageNo,
    setClusterKeywords,
    setClusterName,
    setClusterStatus
} = clusterSlice.actions;

export default clusterSlice.reducer;