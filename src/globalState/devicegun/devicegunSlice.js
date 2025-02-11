import { createSlice } from "@reduxjs/toolkit";

const devicegunSlice = createSlice({
  name: "deviceguns",
  initialState: {
    page: 1,
    Name: "", 
    status: "",
    loading: false,
    error: null,
  },
  reducers: {
    setDeviceGunListPageNo: (state, action) => {
      state.page = action.payload;
    },
    setCpoName: (state, action) => {
      state.Name = action.payload; 
    },
    setCpoStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setCpoName,setDeviceGunListPageNo, setCpoStatus } = devicegunSlice.actions;
export default devicegunSlice.reducer;
