import express from 'express';
import { createStory, getStories, getStoryById, updateStory, deleteStory } from '../controllers/story.controller.js';
import { userAuth } from "../middleware/user.auth.js"

const router = express.Router();

// Create a new story
router.post('/create', userAuth, createStory);

// Get all stories from following users
router.get('/feed', userAuth, getStories);

// Get stories by user ID
// router.get('/user/:userId', userAuth, getUserStories);

// Get a single story by ID
router.get('/:storyId', userAuth, getStoryById);

// Delete a story
router.delete('/:storyId', userAuth, deleteStory);

// // Add story view
// router.post('/:storyId/view', userAuth, addStoryView);

// // Add story reaction
// router.post('/:storyId/reaction', userAuth, addStoryReaction);

export default  router;