import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "purchases",
  initialState: {
    value: [],
  },
  reducers: {
    setPurchases: (state, action) => {
      state.value = action.payload;
    },

    addNumber: (state, action) => {
      const product = state.value.find((el) => el.id === action.payload);
      state.value.map((el) => {
        el.id === product.id ? { ...product, number: +product.number++ } : el
      });
    },

    reduceNumber: (state, action) => {
      const product = state.value.find((el) => el.id === action.payload);
      product.number > 1
        ? state.value.map((el) => {
            el.id === product.id
              ? { ...product, number: +product.number-- }
              : el
          })
        : (state.value = state.value.filter((el) => el.id !== product.id));
    },

    removeProduct: (state, action) => {
      state.value.filter((el) => el.id !== action.payload);
    },
  },
});

export default slice.reducer;
export const { setPurchases, addNumber, reduceNumber, removeProduct } =
  slice.actions;
