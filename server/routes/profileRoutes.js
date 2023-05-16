import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/profileController";

const router = express.Router();

// Get user profile route
router.get("/", getUserProfile);

// Update user profile route
router.put("/", updateUserProfile);

export default router;
