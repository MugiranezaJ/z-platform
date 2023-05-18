import express from 'express';
import { signup, login, logout, resetPassword, loginWithLink } from '../controllers/authController';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Login with link
router.get('/login-link/:token', loginWithLink);

// Logout route
router.post('/logout', logout);

// Reset password route
// router.post('/reset-password', resetPassword);

export default router;
