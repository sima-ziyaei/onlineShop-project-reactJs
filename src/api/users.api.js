import { LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";
import axiosPrivate from "./http";

export const loginRequest = async (user) => {
  try {
    const response = await axiosPrivate.post(LOGIN_URL, user);
    console.log(response);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const refreshTokenRequest = async () => {
  try {
    const response = await axiosPrivate.post(REFRESH_TOKEN_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
