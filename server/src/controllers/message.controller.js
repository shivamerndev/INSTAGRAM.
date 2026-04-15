import { Types } from "mongoose";
import followModel from "../models/follow.model.js"
import messageModel from "../models/message.model.js"
import userModel from "../models/user.model.js"
import { chatUserPipeline } from "../pipelines/chatUser.pipe.js";

const getChatUsers = async (req, res) => {

    let { id } = req.user;
    let mongoseId = new Types.ObjectId(id)

    // const users = await followModel.find({ $or: [{ follower: id }, { followee: id }], status: "accepted" })

    const users = await followModel.aggregate(chatUserPipeline(mongoseId))

    res.json(users)
}


const getMessages = async (req, res) => {

    let { id } = req.user
    const { receiverId } = req.params;

    const canChat = await followModel.findOne({
        $or: [
            {
                followee: id,
                follower: receiverId,
            }, {
                followee: receiverId,
                follower: id,
            }
        ],
        status: "accepted"
    })

    if (!canChat) return res.status(403).json({ message: "You Can't Chat With This Person", success: false })


    const chatUser = await userModel.findOne({ _id: receiverId }).select("username fullName profileImage").lean()

    const chats = await messageModel.find({
        $or: [
            {
                receiver: receiverId,
                sender: id
            }, {
                receiver: id,
                sender: receiverId
            }
        ]
    }).lean()

    res.send({ chatUser, chats })
}

export { getChatUsers, getMessages }