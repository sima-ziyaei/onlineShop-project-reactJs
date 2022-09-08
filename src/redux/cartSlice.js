import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    value: localStorage.getItem('REDUX_STATE')
    ? JSON.parse( localStorage.getItem('REDUX_STATE'))
    : [],
      
      firstName:'', 
      lastName:'',
      address:'',
      tel:'',
      totalPrice:'',
      solution:false
  },
  reducers: {
    setPurchases: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('REDUX_STATE',JSON.stringify(state.value));
    },

    addNumber: (state, action) => {
      const product = state.value.find((el) => el.id === action.payload);
      
     product && product.number< product.productInfo.stock ? state.value.map((el) => {
        el.id === product.id ? { ...product, number: +product.number++ } : el
      }): '';
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
      const product = state.value.find((el) => el.id === action.payload);
      state.value = state.value.filter((el) => el.id !== product.id);
    },

    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },

    setLastName: (state, action) => {
      state.lastName = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setTel: (state, action) => {
      state.tel = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setSolution: (state, action) => {
      state.solution = action.payload;
    },
  },
});

export default slice.reducer;
export const { setPurchases, addNumber, reduceNumber, removeProduct, setAddress, setFirstName, setLastName, setTel , setTotalPrice, setSolution} =
  slice.actions;
