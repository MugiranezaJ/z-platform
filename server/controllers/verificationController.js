import User from "../models/user";
import { verifyToken } from "../utils/auth";

// Submit verification controller
export const submitVerification = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(403).json({ message: "unauthorized access!" });

    const tokenData = await verifyToken(token);
    const userId = tokenData.id;
    const { nidOrPassportNumber, documentImage } = req.body;

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user verification data
    user.nidOrPassportNumber = nidOrPassportNumber;
    user.documentImage = documentImage;
    user.accountStatus = "PENDING VERIFICATION";

    // Save the updated user verification data
    await user.save();

    res.status(200).json({ message: "Verification submitted successfully" });
  } catch (error) {
    console.error("Error in submitVerification:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get verification status controller
export const getVerificationStatus = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(403).json({ message: "unauthorized access!" });

    const tokenData = await verifyToken(token);
    const userId = tokenData.id;

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ status: user.accountStatus });
  } catch (error) {
    console.error("Error in getVerificationStatus:", error);
    res.status(500).json({ error: "Server error" });
  }
};
