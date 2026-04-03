import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stories: [],
    loading: false,
    error: null,
    selectedStory: null,
};

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setStories: (state, action) => {
            state.stories = action.payload;
        },
        addStory: (state, action) => {
            state.stories.push(action.payload);
        },
        removeStory: (state, action) => {
            state.stories = state.stories.filter(story => story.id !== action.payload);
        },
        setSelectedStory: (state, action) => {
            state.selectedStory = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setStories, addStory, removeStory, setSelectedStory, setLoading, setError } = storySlice.actions;
export default storySlice.reducer;