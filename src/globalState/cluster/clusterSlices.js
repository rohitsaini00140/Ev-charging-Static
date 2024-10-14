import { createSlice } from "@reduxjs/toolkit";

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        pageNo: 1,
        searchClusterKeywords: "",
        clusterName: "",
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
        }
    },
});

export const {
    setClusterListPageNo,
    setClusterKeywords,
    setClusterName
} = clusterSlice.actions;

export default clusterSlice.reducer;