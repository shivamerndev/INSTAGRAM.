import userModel from "../models/user.model.js"
import followModel from "../models/follow.model.js"
import { Types } from "mongoose";

const registerService = async (data) => {
    const { username, email } = data;
    let isExist = await userModel.findOne({ $or: [{ username }, { email }] })
    if (isExist) return null;
    return await userModel.create(data)
}

const loginService = async (data) => {
    const { email, username } = data;

    return await userModel.findOne({
        $or: [{ email }, { username }]
    }).select("+password")
}

const profileService = async (id) => {
    return await userModel.findById(id)
}

const logoutSerivice = () => {
    return { success: true, message: "User Logged Out Successfully." }
}

const searchUserService = async (query, id) => {

    // return await userModel.find({ username: { $regex: query, $options: "i" } }).select("fullName username profileImage")
    return await userModel.aggregate([
        {
            '$search': {
                'index': 'search_user',
                'autocomplete': {
                    'query': query,
                    'path': 'username'
                }
            }
        }, {
            '$lookup': {
                from: "follows",
                as: "followDoc",
                let: { searchUser: "$_id" },
                pipeline: [{
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ["$followee", new Types.ObjectId(id)] }, // don't use Schema.Types.ObjectId(id)
                                { $eq: ["$follower", "$$searchUser"] }
                            ]
                        }
                    }
                }]
            }
        }, {
            '$addFields': {
                followStatus: {
                    $cond: {
                        if: { $eq: [{ $size: "$followDoc" }, 0] },
                        then: null,
                        else: {
                            $cond: {
                                if: { $eq: [{ $arrayElemAt: ["$followDoc.status", 0] }, "pending"] },
                                then: "requested",
                                else: "following"
                            }
                        }
                    }
                }
            }
        }, {
            $project: {
                profileImage: 1,
                username: 1,
                fullName: 1,
                followStatus: 1
            }
        }
    ])
}

const followUserService = async (data) => {
    return await followModel.create(data)
}

const notificationService = async (id) => {
    return await followModel.aggregate([{
        $match: {
            followee: new Types.ObjectId(id),
            status: "pending"
        }
    }, {
        $lookup: {
            from: "users",
            as: "user",
            localField: "follower",
            foreignField: "_id"
        }
    }, {
        $unwind: {
            path: "$user"
        }
    }, {
        $project: {
            _id: 0,
            id: "$user._id",
            username: "$user.username",
            fullName: "$user.fullName",
            profileImage: "$user.profileImage"
        }

    }
    ])
}

export { registerService, loginService, profileService, logoutSerivice, searchUserService, followUserService, notificationService }