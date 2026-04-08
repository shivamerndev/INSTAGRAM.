import e from "express";
import { userAuth } from "../middleware/user.auth.js";
import { createPost, getPost } from "../controllers/post.controller.js";
import upload from "../config/multer.config.js";

const postRouter = e.Router()

/**
 * @routes /api/posts
*/

postRouter.post("/create",upload.array("media", 7),userAuth, createPost)
postRouter.get("/", getPost)

export default postRouter;