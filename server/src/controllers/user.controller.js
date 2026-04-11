import { followUserService, profileDataService, requestService, searchUserService } from "../services/user.service.js";
import handleError from "../utils/error.utils.js";

/**
 * @method GET
 * @params text - search query
 * @route /api/user/search?text=
*/

const searchUser = async (req, res) => {
    const { text } = req.query;
    const { id } = req.user
    if (!text) return res.status(400).json({ success: false, message: "Search Query Missing." })
    const users = await searchUserService(text, id)
    res.status(200).json({ users, success: true })
}

/**
 * @method POST
 * @params /api/user/follow 
*/

const followUser = async (req, res) => {

    const { body: { followee }, userId: { id: follower } } = req;
    if (!followee || !follower || followee === follower) return res.status(400).json({ success: false, message: "SomeThing Went Wrong" })

    let response = await followUserService({ followee, follower })
    if (!response) return res.send(400).json({ success: false, message: "Something Went Wrong", response })

    res.status(200).json(response)
    
}


/**
 * @method GET
 * @params /api/user/notify 
*/

const getFollowRequests = async (req, res) => {

    const { id } = req.user

    let requests = await requestService({ followee: id, status: "pending" })

    return res.status(200).json({
        message: "Follow requests fetched successfully",
        success: true,
        requests
    })

}



/**
 * @method GET
 * @params /api/user/profile-data 
*/

const getUserProfileData = async (req,res) => {
    const {id:follower} = req.user
    let response = await profileDataService(follower)
    res.send(response)
}

export { searchUser, followUser, getFollowRequests,getUserProfileData }