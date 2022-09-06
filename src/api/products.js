import { PRODUCTS_URL } from "../config/api";
import axiosPrivate from "./http";

export const fetchAllProductsRequest = async (number = 1) => {
  try {
    const response = await axiosPrivate.get(
      `${PRODUCTS_URL}?_page=${number}&_limit=5`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductRequest = async (id, updatedProduct) => {
  console.log("body", updatedProduct);
  try {
    const response = await axiosPrivate.patch(
      `${PRODUCTS_URL}/${id}`,
      updatedProduct
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createProductRequest = async (newProduct) => {
  try {
    const response = await axiosPrivate.post(`${PRODUCTS_URL}`, newProduct);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const response = await axiosPrivate.delete(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
