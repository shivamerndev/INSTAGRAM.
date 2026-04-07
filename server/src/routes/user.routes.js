import { createAccessToken, followUser, getNotification, login, logout, profile, register, searchUser } from '../controllers/user.controller.js';
import express from 'express';
import { registerValidation } from '../validator/user.validator.js';
import { userAuth, refreshAccessToken } from '../middleware/user.auth.js';

const router = express.Router();

// POST /api/user/register
router.post('/register', registerValidation, register);

// POST /api/user/login
router.post('/login', login);

// POST /api/user/refresh-token
router.post('/refresh-token', refreshAccessToken, createAccessToken);

// GET /api/user/profile
router.get('/profile', userAuth, profile);

// POST /api/user/logout
router.post('/logout', logout);

// GET /api/user/search
router.get('/search',userAuth, searchUser);

// POST /api/user/follow
router.post('/follow',userAuth, followUser);

// GET /api/user/notify
router.get("/notify",userAuth,getNotification)

export default router;