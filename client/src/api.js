import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Set your API base URL here
});

// Interceptor to add authentication token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
