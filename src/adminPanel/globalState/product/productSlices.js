import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        selectedProductId: [],
        pageNo: JSON.parse(sessionStorage.getItem('productListPageNo')) || 1,
        searchKeywords: JSON.parse(sessionStorage.getItem('searchKeyWords')) || '',
        order: JSON.parse(sessionStorage.getItem('orderType')) || 'DESC',
        rowNo: JSON.parse(sessionStorage.getItem('productListRowNo')) || 10,
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedProductId: (state, action) => {
            state.selectedProductId = [...state.selectedProductId, action.payload];
        },
        clearSelectedProductId: (state, action) => {
            state.selectedProductId = state.selectedProductId.filter(id => id !== action.payload);
        },
        setProductListPageNo: (state, action) => {
            state.pageNo = action.payload
        },
        setSearchKeywords: (state, action) => {
            state.searchKeywords = action.payload;
        },
        setOrderType: (state, action) => {
            state.order = action.payload;
        },
        setProductListRowNo: (state, action) => {
            state.rowNo = action.payload
        }
    },
});

export const {
    setSelectedProductId,
    clearSelectedProductId,
    setProductListPageNo,
    setSearchKeywords,
    setOrderType,
    setProductListRowNo
} = productSlice.actions;

export default productSlice.reducer;