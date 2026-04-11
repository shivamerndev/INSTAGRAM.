import { configureStore } from '@reduxjs/toolkit'
import { authSlice, postSlice, storySlice, followSlice, chatSlice } from "./features/index.js"

export default configureStore({
  reducer: {
    user: authSlice,
    posts: postSlice,
    stories: storySlice,
    follows: followSlice,
    chats: chatSlice
  }
})