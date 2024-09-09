import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../product/productApis";
import productSlices from "../product/productSlices";
import { categoryApi } from "../category/categoryApis";
import categorySlices from "../category/categorySlices";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        product: productSlices,
        category: categorySlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            productApi.middleware,
            categoryApi.middleware
        )
})