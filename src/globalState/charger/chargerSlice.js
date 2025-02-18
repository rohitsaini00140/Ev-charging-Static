import { createSlice } from "@reduxjs/toolkit";

const chargerSlice = createSlice({
  name: 'charger',
  initialState: {
      page: 1,           // for charger device page
      deviceID: "",
      log_page: 1   

  },
  reducers: {
      setChargerDashboardPageNo: (state, action) => {
          state.page = action.payload;  // Update page for charger devices
      },
    
      setDeviceID: (state, action) => {
          state.deviceID = action.payload;
      },

      setChargerLogPage: (state, action) => {
        state.log_page = action.payload; // New reducer for log pagination
      }
  },
});

export const {
  setChargerDashboardPageNo,
  setDeviceID,
  setChargerLogPage ,
} = chargerSlice.actions;

export default chargerSlice.reducer;
