import express from 'express';
import { userAuth } from '../middleware/user.auth.js';
import { followUser, getFollowRequests, getUserProfileData, searchUser } from '../controllers/user.controller.js';

const router = express.Router();

// GET /api/user/search
router.get('/search', userAuth, searchUser);

// POST /api/user/follow
router.post('/follow', userAuth, followUser);

// GET /api/user/follow-requests
router.get("/follow-requests", userAuth, getFollowRequests)

// GET /api/user/profile-data
router.get("/profile-data",userAuth,getUserProfileData)

export default router;