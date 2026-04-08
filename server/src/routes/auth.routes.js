import { createAccessToken, login, logout, profile, register } from '../controllers/auth.controller.js';
import express from 'express';
import { registerValidation } from '../validator/user.validator.js';
import { userAuth, refreshAccessToken } from '../middleware/user.auth.js';

const router = express.Router();

// POST /api/auth/register
router.post('/register', registerValidation, register);

// POST /api/auth/login
router.post('/login', login);

// POST /api/auth/refresh-token
router.post('/refresh-token', refreshAccessToken, createAccessToken);

// GET /api/auth/profile
router.get('/profile', userAuth, profile);

// POST /api/auth/logout
router.post('/logout', logout);


export default router;