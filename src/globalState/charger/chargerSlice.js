import { createSlice } from "@reduxjs/toolkit";

const chargerSlice = createSlice({
  name: 'charger',
  initialState: {
      page: 1,
      deviceID: "",
      pageNO:1,
      
  },
  reducers: {
      setChargerDashboardPageNo: (state, action) => {
          state.page = action.payload
      },
      setDeviceID: (state, action) => {
        state.deviceID = action.payload;
      },
      setChargerDashboardlistPageNo: (state, action) => {
        state.pageNO = action.payload
    },
    
  },
});

export const {
  setChargerDashboardPageNo,
  setChargerDashboardlistPageNo,
  setDeviceID,
} = chargerSlice.actions;

export default chargerSlice.reducer;