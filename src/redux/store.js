import { configureStore } from "@reduxjs/toolkit";
import product from './productSlice';
import users from "./usersSlice";
import cart from './cartSlice';
export const store=configureStore({
reducer:{
product,
users,
cart
}
})

