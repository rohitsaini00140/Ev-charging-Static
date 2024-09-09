import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["category"],
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (formData) => ({
                url: "/addCategory",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['category']
        }),
        getCategories: builder.query({
            query: () => "/getCategories",
            providesTags: ['category'],
        }),
        updateCategory: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/updateCategory/${id}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ['category']
        }),
        deleteCategoryImage: builder.mutation({
            query: ({ dataId }) => ({
                url: `/deleteCategoryImage?categoryId=${dataId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['category']
        }),
        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url: `/deleteCategory/${categoryId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['category']
        }),
        deleteMultipleCategory: builder.mutation({
            query: (allCategoryId) => {
                const queryString = allCategoryId.map(id => `allCategoryId=${encodeURIComponent(id)}`).join('&');
                return {
                    url: `/deleteMultipleCategory?${queryString}`,
                    method: "DELETE"
                };
            },
            invalidatesTags: ['category']
        }),
        showFilteredCategory: builder.query({
            query: ({ order, searchKeywords, pageNo, rowNo }) => ({
                url: `/categorySortSearchPagination?order=${order}&searchKeywords=${searchKeywords}&pageNo=${pageNo}&rowNo=${rowNo}`
            }),
            providesTags: ['category']
        })
    }),
})

export const {
    useAddCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryImageMutation,
    useDeleteCategoryMutation,
    useDeleteMultipleCategoryMutation,
    useShowFilteredCategoryQuery
} = categoryApi;