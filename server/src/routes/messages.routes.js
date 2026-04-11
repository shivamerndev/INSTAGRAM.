import express from 'express';
import { getChatUsers } from '../controllers/message.controller.js';
import { userAuth } from "../middleware/user.auth.js"


const router = express.Router();

/**
 * @method GET /api/messages/users 
*/

router.get("/users", userAuth, getChatUsers)


export default router;