import { createSlice } from "@reduxjs/toolkit";

const chargerSlice = createSlice({
  name: 'charger',
  initialState: {
      page: 1,
      deviceID: "",
      
  },
  reducers: {
      setChargerDashboardPageNo: (state, action) => {
          state.page = action.payload
      },
      setDeviceID: (state, action) => {
        state.deviceID = action.payload;
      },
    
  },
});

export const {
  setChargerDashboardPageNo,
  setDeviceID,
} = chargerSlice.actions;

export default chargerSlice.reducer;