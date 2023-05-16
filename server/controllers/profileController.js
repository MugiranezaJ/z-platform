import User from "../models/user";
import { verifyToken } from "../utils/auth";

// Get user profile controller
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.body.userId;

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user profile data
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUserProfile:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update user profile controller
export const updateUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(403).json({ message: "unauthorized access!" });

    const tokenData = await verifyToken(token);
    const userId = tokenData.id;
    const {
      firstName,
      lastName,
      gender,
      age,
      dateOfBirth,
      maritalStatus,
      nationality,
    } = req.body;

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user profile data
    user.firstName = firstName;
    user.lastName = lastName;
    user.gender = gender;
    user.age = age;
    user.dateOfBirth = dateOfBirth;
    user.maritalStatus = maritalStatus;
    user.nationality = nationality;

    // Save the updated user profile
    await user.save();

    res.status(200).json(user);
    
  } catch (error) {
    console.error("Error in updateUserProfile:", error);
    res.status(500).json({ error: "Server error" });
  }
};
