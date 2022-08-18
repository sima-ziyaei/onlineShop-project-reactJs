import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    productItem: [],
    categoryItem: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.productItem = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryItem = action.payload;
    },
  },
});
export const { setProduct, setCategory } = slice.actions;
export default slice.reducer;
