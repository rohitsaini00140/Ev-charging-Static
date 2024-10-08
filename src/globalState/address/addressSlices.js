import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'addressSlice',
    initialState: {
        countryId: "",
        stateId: "",
        loading: false,
        error: null,
    },
    reducers: {
        setCountryId: (state, action) => {
            console.log(action.payload)
            state.countryId = action.payload
        },
        setStateId: (state, action) => {
            console.log(action.payload)
            state.stateId = action.payload
        }
    },
});

export const {
    setCountryId,
    setStateId
} = addressSlice.actions;

export default addressSlice.reducer;