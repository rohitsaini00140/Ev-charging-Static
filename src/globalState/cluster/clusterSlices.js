import { createSlice } from "@reduxjs/toolkit";

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        pageNo: JSON.parse(sessionStorage.getItem('clusterListPageNo')) || 1,
        searchClusterKeywords: JSON.parse(sessionStorage.getItem('searchCluster')) || "",
        loading: false,
        error: null,
    },
    reducers: {
        setClusterListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setClusterKeywords: (state, action) => {
            state.searchClusterKeywords = action.payload
        }
    },
});

export const {
    setClusterListPageNo,
    setClusterKeywords
} = clusterSlice.actions;

export default clusterSlice.reducer;