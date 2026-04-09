import followModel from "../models/follow.model.js"
import { searchPipeline } from "../pipelines/search.pipe.js";
import userModel from "../models/user.model.js";


const searchUserService = async (query, id) => {
    return await userModel.aggregate(searchPipeline(query, id))
}

const followUserService = async (data) => {

    let isFollow = await followModel.findOne({ follower: data.follower })


    if (isFollow && isFollow.status === "pending") {
        await followModel.findByIdAndDelete(isFollow._id)
        return { success: true, message: "Request Deleted" }
    }

    await followModel.create(data)
    return { success: true, message: "Requested" }
}


const requestService = async (data) => {
    return await followModel.find(data).populate("follower", "username profileImage")
}

const profileDataService = async (id) => {
    const followerCount = await followModel.countDocuments({ follower:id })
    const followeeCount = await followModel.countDocuments({ followee:id })
    return { followerCount, followeeCount }
}

export { searchUserService, followUserService, requestService, profileDataService }