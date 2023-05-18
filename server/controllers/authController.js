import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../models/user";
import { generateAccessToken, generateLoginLinkToken } from "../utils/auth";
import config from "../config";
// import { passwordResetEmail } from '../utils/email';

// Signup controller
export const signup = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists with the given email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    console.log("#1......", newUser);
    // Generate access token
    const accessToken = generateAccessToken({ id: newUser._id });

    console.log("#2......", newUser);

    res.status(201).json({ accessToken });
    console.log("#3......");
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if user exists with the given email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate access token
    const accessToken = generateAccessToken({ id: user._id });

    // Generate login link token
    const loginLinkToken = generateLoginLinkToken();

    // Save the login link token to the user document
    user.loginLinkToken = loginLinkToken;
    user.test = "testing...";
    await user.save();

    // Generate the login link URL
    const loginLinkURL = `${config.appBaseUrl}/auth/login-link/${loginLinkToken}`;

    res.status(200).json({ accessToken, loginLinkURL, userId: user._id });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login with link controller
export const loginWithLink = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the user with the matching login link token
    const user = await User.findOne({ loginLinkToken: token });
    if (!user) {
      return res.status(400).json({ error: "Invalid or expired login link" });
    }

    // Clear the login link token from the user document
    user.loginLinkToken = null;
    await user.save();

    // Generate access token
    const accessToken = generateAccessToken(user._id);

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Error in loginWithLink:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Logout controller
export const logout = (req, res) => {
  // Perform any necessary logout actions (e.g., invalidate tokens, clear cookies, etc.)
  // ...

  res.status(200).json({ message: "Logout successful" });
};

// Reset password controller
// export const resetPassword = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email } = req.body;

//     // Check if user exists with the given email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Generate a password reset token (e.g., a random string)
//     const resetToken = generateResetToken();

//     // Save the reset token and its expiration time to the user document
//     // user.resetPasswordToken
// }
//   }
