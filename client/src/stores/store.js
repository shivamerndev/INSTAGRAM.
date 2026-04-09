import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./features/auth.slice.js"
import postSlice from "./features/post.slice.js"
import storySlice from "./features/story.slice.js"
import followSlice from "./features/follow.slice.js"

export default configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
    stories: storySlice,
    follows:followSlice
  }
})