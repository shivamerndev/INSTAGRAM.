import userModel from "../models/user.model.js";
import { followUserService, loginService, logoutSerivice, profileService, registerService, searchUserService } from "../services/user.service.js"
import handleError from "../utils/error.utils.js";


/**
 * @method POST
 * @register - register new user
 * @route - /api/user/register
*/

const register = handleError(async (req, res) => {

    const { fullName, email, password, username } = req.body;

    if (!fullName || !email || !password || !username) return res.status(400).json({ message: "All Fields Are Required." })
    let response = await registerService(req.body)

    if (!response) return res.status(400).json({ meassage: "User Already Exists.", success: false })
    const token = await response.generateToken({ id: response._id })

    res.cookie("token", token)
    res.status(201).json({ message: "User Registered Successfully.", success: true })

})


/**
 * @method POST
 * @login - login user
 * @route - /api/user/login
*/

const login = handleError(async (req, res) => {

    const { password, email, username } = req.body;

    let user = await loginService({ email, username })
    if (!user) return res.status(401).json({ success: false, message: "Invalid Credentials" })

    const matchPassword = await user.comparePassword(password)
    if (!matchPassword) return res.status(401).json({ success: false, message: "Invalid Credentials" })

    const token = await user.generateToken({ id: user._id })

    res.cookie("token", token)
    res.status(200).json({ success: true, message: "LoggedIn Successfully." })

})


/**
 * @method POST
 * @token  create new Access Token
 * @route  /api/user/refresh-token
*/

const createAccessToken = handleError(async (res, req) => {
    const { id } = req.userId;
    const token = await userModel.generateToken(id)
    console.log("New Access Token", token)
})


/**
 * @method GET
 * @profile - send user's profile
 * @route - /api/user/profile
*/

const profile = async (req, res) => {
    const { id } = req.userId;
    const user = await profileService(id)
    if (!user) return res.status(404).json({ success: false, message: "User Not Found" })
    res.status(200).json({ user, success: true })
}


/**
 * @method POST
 * @logout - logout the user
 * @route - /api/user/logout
*/

const logout = (req, res) => {
    if (!req.headers.cookie) return res.send("cookie already cleared.");
    res.clearCookie("token")
    const response = logoutSerivice()
    res.status(200).json(response)
}


/**
 * @method GET
 * @params text - search query
 * @route /api/user/search?text=
*/

const searchUser = async (req, res) => {
    const { text } = req.query;
    const { id } = req.userId
    if (!text) return res.status(400).json({ success: false, message: "Search Query Missing." })
    const users = await searchUserService(text, id)
    res.status(200).json({ users, success: true })
}

/**
 * @method POST
 * @returs /api/user/follow 
*/

const followUser = async (req, res) => {
    const { body: { followee }, userId: { id: follower } } = req;
    if (!followee || !follower || followee === follower) return res.status(400).json({ success: false, message: "Some Went Wrong" })
    let response = await followUserService({ followee, follower })
    if (!response) return console.log(response)
    res.status(200).json({ success: true, message: "Requested" })
}

export { register, login, createAccessToken, profile, logout, searchUser, followUser }