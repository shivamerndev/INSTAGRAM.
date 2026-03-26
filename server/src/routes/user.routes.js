import { login, logout, register } from '../controllers/user.controller.js';
import express from 'express';
import { registerValidation } from '../validator/user.validator.js';

const router = express.Router();

// POST /api/user/register
router.post('/register', registerValidation, register);

// POST /api/user/login
router.post('/login', login);

// POST /api/user/logout
router.post('/logout', logout);

export default router;