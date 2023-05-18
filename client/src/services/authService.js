import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });

    return response.data.accessToken;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    return response.data.accessToken;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const requestPasswordReset = async (email) => {
  try {
    await axios.post("/api/auth/reset-password/request", { email });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const resetPassword = async (email, newPassword, resetToken) => {
  try {
    await axios.post("/api/auth/reset-password", {
      email,
      newPassword,
      resetToken,
    });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
