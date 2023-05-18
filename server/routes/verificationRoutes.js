import express from "express";
import {
  submitVerification,
  getVerificationStatus,
  VerifyUserCallBack,
} from "../controllers/verificationController";

const router = express.Router();

// Submit verification route
router.post("/", submitVerification);

// Get verification status route
router.get("/", getVerificationStatus);

router.post("/approve", VerifyUserCallBack);

export default router;
