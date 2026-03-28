import e from "express";
import upload from "../config/multer.config.js";
import {userAuth} from "../middleware/user.auth.js";
import { createPost } from "../controllers/post.controller.js";

const postRouter = e.Router()

postRouter.post("/",upload.array("media",5),userAuth,createPost)
postRouter.get("/",()=>"p")

export default postRouter;