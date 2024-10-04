import { createSlice } from "@reduxjs/toolkit";

const googleMapSlice = createSlice({
    name: 'googleMap',
    initialState: {
        address: JSON.parse(sessionStorage.getItem('address')) || "",
        loading: false,
        error: null,
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        }
    },
});

export const {
    setAddress
} = googleMapSlice.actions;

export default googleMapSlice.reducer;