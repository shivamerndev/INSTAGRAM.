import { Types } from "mongoose";
import followModel from "../models/follow.model.js"
import { chatUserPipeline } from "../pipelines/chatUser.pipe.js";

const getChatUsers = async (req, res) => {

    let { id } = req.user;
    let mongoseId = new Types.ObjectId(id)

    // const users = await followModel.find({ $or: [{ follower: id }, { followee: id }], status: "accepted" })

    const users = await followModel.aggregate(chatUserPipeline(mongoseId))

    res.json(users)
}

export { getChatUsers }