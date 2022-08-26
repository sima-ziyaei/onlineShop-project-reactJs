import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    productItem: [],
    categoryItem: [],
    subCategoryItem:[],
    newPrice:'',
    newStock:''
  },
  reducers: {
    setProduct: (state, action) => {
      state.productItem = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryItem = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategoryItem = action.payload;
    },
    setNewPrice: (state, action) => {
      state.newPrice = action.payload;
    },
    setNewStock: (state, action) => {
      state.newStock = action.payload;
    },
  },
});
export const { setProduct, setCategory, setSubCategory, setNewPrice, setNewStock } = slice.actions;
export default slice.reducer;
