import getMediaUrl from '../config/imagekit.config.js';
import storyModel from '../models/story.model.js';

// Create a new story
const createStory = async (req, res) => {
    try {
        const { id } = req.userId
        const files = req.files;
        const urls = await Promise.all(files.map(file => getMediaUrl(file)))

        const story = new storyModel({
            userId: id,
            media: urls
        });

        await story.save();

        res.status(201).json({ message: 'Story created successfully', story });
    } catch (error) {
        res.status(500).json({ message: 'Error creating story', error: error.message });
    }
};

// Get all stories
const getStories = async (req, res) => {
    try {
        const stories = await storyModel.find().populate("userId").sort({ createdAt: -1 });
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stories', error: error.message });
    }
};

// Get story by ID
const getStoryById = async (req, res) => {
    try {
        const story = await storyModel.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching story', error: error.message });
    }
};

// Update story
const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({ message: 'Story updated successfully', story });
    } catch (error) {
        res.status(500).json({ message: 'Error updating story', error: error.message });
    }
};

// Delete story
const deleteStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndDelete(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({ message: 'Story deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting story', error: error.message });
    }
};

export { createStory, getStories, getStoryById, updateStory, deleteStory };