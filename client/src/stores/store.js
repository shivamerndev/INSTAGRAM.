import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./features/auth.slice.js"
import postSlice from "./features/post.slice.js"


export default configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice
  }
})