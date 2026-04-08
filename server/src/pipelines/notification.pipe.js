import { Types } from "mongoose";

export const notifyPipeline =  (id)=> [{
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
]