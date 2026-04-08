import followModel from "../models/follow.model.js"
import { searchPipeline } from "../pipelines/search.pipe.js";
import userModel from "../models/user.model.js";


const searchUserService = async (query, id) => {
    return await userModel.aggregate(searchPipeline(query, id))
}

const followUserService = async (data) => {
    return await followModel.create(data)
}


const requestService = async (data) => { 
    return await followModel.find(data).populate("follower", "username profileImage")
}

export { searchUserService, followUserService, requestService }