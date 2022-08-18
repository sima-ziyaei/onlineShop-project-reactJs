import { configureStore } from "@reduxjs/toolkit";
import product from './productSlice';
export const store=configureStore({
reducer:{
product:product

}
})

