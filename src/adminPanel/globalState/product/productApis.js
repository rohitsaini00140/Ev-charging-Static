import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["product"],
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (formData) => ({
                url: "/addProduct",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['product']
        }),
        getProducts: builder.query({
            query: () => "/getProducts",
            providesTags: ['product'],
        }),
        updateProduct: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/updateProduct/${id}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ['product']
        }),
        deleteProductImage: builder.mutation({
            query: ({ dataId, imageId }) => ({
                url: `/deleteProductImage?productId=${dataId}&imageId=${imageId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['product']
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/deleteProduct/${productId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['product']
        }),
        deleteMultipleProduct: builder.mutation({
            query: (allProductId) => {
                const queryString = allProductId.map(id => `allProductsId=${encodeURIComponent(id)}`).join('&');
                return {
                    url: `/deleteMultipleProduct?${queryString}`,
                    method: "DELETE"
                };
            },
            invalidatesTags: ['product']
        }),
        showFilteredProduct: builder.query({
            query: ({ order, searchKeywords, pageNo, rowNo }) => ({
                url: `/productSortSearchPagination?order=${order}&searchKeywords=${searchKeywords}&pageNo=${pageNo}&rowNo=${rowNo}`
            }),
            providesTags: ['product']
        })
    }),
})

export const {
    useAddProductMutation,
    useGetProductsQuery,
    useUpdateProductMutation,
    useDeleteProductImageMutation,
    useDeleteProductMutation,
    useDeleteMultipleProductMutation,
    useShowFilteredProductQuery
} = productApi;