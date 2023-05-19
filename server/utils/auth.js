import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../config";

// Generate JWT token
export const generateAccessToken = (payload) => {
  console.log("exp:", config.jwtExpiration, "secret:", config.jwtSecret);
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiration,
  });
};

// Verify JWT token
export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (error) {
    console.error("Error in verifying token:", error);
    throw new Error("Invalid token");
  }
};

export const generateLoginLinkToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  return token;
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
