import jwt from "jsonwebtoken";
import config from "../config";

// Generate JWT token
export const generateAccessToken = (payload) => {
  console.log("exp:", config.jwtExpiration, "secret:", config.jwtSecret)
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
