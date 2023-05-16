import express from 'express';
import { signup, login, logout, resetPassword } from '../controllers/authController';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);

// Reset password route
// router.post('/reset-password', resetPassword);

export default router;
