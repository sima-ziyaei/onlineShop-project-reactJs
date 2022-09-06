import axios from "axios";
import { BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../config/constants";
import { refreshToken } from "../redux/usersSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

axiosPrivate.defaults.baseURL = BASE_URL;
axiosPrivate.interceptors.request.use((req) => {
  if (req.url === REFRESH_TOKEN_URL) {
    const token = localStorage.getItem(REFRESH_TOKEN);
    req.headers.refreshToken = token;
  } else if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    req.headers.token = token;
  }
  return req;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === REFRESH_TOKEN_URL
    ) {
      return Promise.reject(error);
    }

    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {}
    }
  }
);
export default axiosPrivate;
