import express from 'express';
import { submitVerification, getVerificationStatus } from '../controllers/verificationController';

const router = express.Router();

// Submit verification route
router.post('/', submitVerification);

// Get verification status route
router.get('/', getVerificationStatus);

export default router;
