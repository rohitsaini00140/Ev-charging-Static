import { createSlice } from "@reduxjs/toolkit";

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        pageNo: JSON.parse(sessionStorage.getItem('clusterListPageNo')) || 1,
        loading: false,
        error: null,
    },
    reducers: {
        setClusterListPageNo: (state, action) => {
            state.pageNo = action.payload
        }
    },
});

export const {
    setClusterListPageNo
} = clusterSlice.actions;

export default clusterSlice.reducer;