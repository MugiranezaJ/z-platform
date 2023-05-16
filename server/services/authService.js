import jwt from "jsonwebtoken";
import config from "../config";

// Generate access token
export const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: config.jwtExpiration,
  });
  return accessToken;
};

// Verify access token
export const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded.userId;
  } catch (error) {
    return null;
  }
};
