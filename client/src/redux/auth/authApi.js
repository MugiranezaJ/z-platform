import axios from "axios";

// Set the base URL for API requests
axios.defaults.baseURL = "http://localhost:3200/";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const logout = async () => {
  try {
    await axios.post("/auth/logout");
  } catch (error) {
    throw error.response.data.error;
  }
};

export const resetPassword = async (email) => {
  try {
    await axios.post("/auth/reset-password", { email });
  } catch (error) {
    throw error.response.data.error;
  }
};

export const verifyAccount = async (verificationToken) => {
  try {
    await axios.get(`/auth/verify-account/${verificationToken}`);
  } catch (error) {
    throw error.response.data.error;
  }
};
