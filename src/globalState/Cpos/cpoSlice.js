import { createSlice } from "@reduxjs/toolkit";

const cpoSlice = createSlice({
  name: "cpo",
  initialState: {
    page: 1,
    Name: "", 
    status: "",
    loading: false,
    error: null,
  },
  reducers: {
    setCpoListPageNo: (state, action) => {
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

export const { setCpoName, setCpoListPageNo, setCpoStatus } = cpoSlice.actions;
export default cpoSlice.reducer;
