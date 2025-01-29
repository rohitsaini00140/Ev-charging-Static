import { createSlice } from "@reduxjs/toolkit";

const chargerSlice = createSlice({
  name: 'charger',
  initialState: {
      pageNo: 1,
      
  },
  reducers: {
      setChargerPageNo: (state, action) => {
          state.pageNo = action.payload
      },
    
  },
});

export const {
  setChargerListPageNo,
} = chargerSlice.actions;

export default chargerSlice.reducer;