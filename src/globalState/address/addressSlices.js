import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'addressSlice',
    initialState: {
        countryId: JSON.parse(sessionStorage.getItem("selectedCountryId")) || "",
        stateId: JSON.parse(sessionStorage.getItem("selectedStateId")) || "",
        cityId: JSON.parse(sessionStorage.getItem("selectedCityId")) || "",
        countryName: JSON.parse(sessionStorage.getItem("selectedCountryName")) || "",
        stateName: JSON.parse(sessionStorage.getItem("selectedStateName")) || "",
        cityName: JSON.parse(sessionStorage.getItem("selectedCityName")) || "",
        loading: false,
        error: null,
    },
    reducers: {
        setCountryId: (state, action) => {
            state.countryId = action.payload
        },
        setStateId: (state, action) => {
            state.stateId = action.payload
        },
        setCityId: (state, action) => {
            state.cityId = action.payload
        },
        setCountryName: (state, action) => {
            state.countryName = action.payload
        },
        setStateName: (state, action) => {
            state.stateName = action.payload
        },
        setCityName: (state, action) => {
            state.cityName = action.payload
        },
    },
});

export const {
    setCountryId,
    setStateId,
    setCityId,
    setCountryName,
    setStateName,
    setCityName
} = addressSlice.actions;

export default addressSlice.reducer;