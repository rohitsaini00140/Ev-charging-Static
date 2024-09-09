import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        selectedCategoryId: [],
        pageNo: JSON.parse(sessionStorage.getItem('categoryListPageNo')) || 1,
        searchKeywords: JSON.parse(sessionStorage.getItem('searchKeyWords')) || '',
        order: JSON.parse(sessionStorage.getItem('orderType')) || 'DESC',
        rowNo: JSON.parse(sessionStorage.getItem('categoryListRowNo')) || 10,
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedCategoryId: (state, action) => {
            state.selectedCategoryId = [...state.selectedCategoryId, action.payload];
        },
        clearSelectedCategoryId: (state, action) => {
            state.selectedCategoryId = state.selectedCategoryId.filter(id => id !== action.payload);
        },
        setCategoryListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setSearchKeywords: (state, action) => {
            state.searchKeywords = action.payload;
        },
        setOrderType: (state, action) => {
            state.order = action.payload;
        },
        setCategoryListRowNo: (state, action) => {
            state.rowNo = action.payload
        }
    },
});

export const {
    setSelectedCategoryId,
    clearSelectedCategoryId,
    setCategoryListPageNo,
    setSearchKeywords,
    setOrderType,
    setCategoryListRowNo
} = categorySlice.actions;

export default categorySlice.reducer;