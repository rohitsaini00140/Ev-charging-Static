import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    pageNo: 1,
    searchProjectKeywords: "",
    projectStatus: "",
    projectName: "",
    loading: false,
    error: null,
  },
  reducers: {
    setProjectListPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setProjectKeywords: (state, action) => {
      state.searchProjectKeywords = action.payload;
    },
    setProjectStatus: (state, action) => {
      state.projectStatus = action.payload;
    },
    setProjectName: (state, action) => {
      state.projectName = action.payload;
    },
  },
});
export const { setProjectListPageNo, setProjectKeywords, setProjectStatus,setProjectName } =
  projectSlice.actions;
export default projectSlice.reducer;
