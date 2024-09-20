import { createSlice } from "@reduxjs/toolkit";

const organizationSlice = createSlice({
    name: 'organization',
    initialState: {
        pageNo: JSON.parse(sessionStorage.getItem('organizationListPageNo')) || 1,
        loading: false,
        error: null,
    },
    reducers: {
        setOrganizationListPageNo: (state, action) => {
            state.pageNo = action.payload
        }
    },
});

export const {
    setOrganizationListPageNo
} = organizationSlice.actions;

export default organizationSlice.reducer;