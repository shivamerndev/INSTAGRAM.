import { configureStore } from '@reduxjs/toolkit'
import { authSlice, postSlice, storySlice, followSlice, chatSlice, userSlice } from "./features/index.js"

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    posts: postSlice,
    stories: storySlice,
    follows: followSlice,
    chats: chatSlice
  }
})