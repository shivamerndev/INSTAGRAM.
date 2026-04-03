import e from "express";
// import upload from "../config/multer.config.js";
import { userAuth } from "../middleware/user.auth.js";
import { createPost, getPost } from "../controllers/post.controller.js";

const postRouter = e.Router()

/**
 * @routes /api/posts
*/

postRouter.post("/create",userAuth, createPost)
postRouter.get("/", getPost)

export default postRouter;