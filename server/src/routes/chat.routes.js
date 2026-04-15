import express from 'express';
import { getChatUsers, getMessages } from '../controllers/message.controller.js';
import { userAuth } from "../middleware/user.auth.js"


const router = express.Router();

/**
 * @method GET /api/chat/users 
*/

router.get("/users", userAuth, getChatUsers)


/**
 * @method GET /api/chat/:receiverId
*/

router.get("/:receiverId", userAuth, getMessages)


export default router;