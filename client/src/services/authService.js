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

export const validatePassword = (password) => {
  // Minimum length of 8 characters
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  // Contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    throw new Error("Password must contain at least one uppercase letter");
  }

  // Contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    throw new Error("Password must contain at least one lowercase letter");
  }

  // Contains at least one digit
  if (!/[0-9]/.test(password)) {
    throw new Error("Password must contain at least one digit");
  }

  // Contains at least one special character
  if (!/[$@$!%*?&]/.test(password)) {
    throw new Error(
      "Password must contain at least one special character ($, @, $, !, %, *, ?, or &)"
    );
  }

  // Password is valid
  return "Password is valid";
};
