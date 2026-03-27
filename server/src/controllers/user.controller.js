import { loginService, logoutSerivice, registerService } from "../services/user.service.js"
import handleError from "../utils/error.utils.js";

/**
 * @register - register new user
 * @route - /api/user/register
*/

const register = handleError(async (req, res) => {

    const { fullName, email, password, username } = req.body;

    if (!fullName, !email, !password, !username) return res.status(400).json({ message: "All Fields Are Required." })
    let response = await registerService(req.body)

    if (!response) return res.status(400).json({ meassage: "User Already Exists.", success: false })
    const token = await user.generateToken({ id: response._id })

    res.cookie("token", token)
    res.status(201).json({ message: "User Registered Successfully.", success: true })

})


/**
 * @register - login user
 * @route - /api/user/login
*/

const login = handleError(async (req, res) => {

    const { password, EmailOrUsername } = req.body;

    let user = await loginService(EmailOrUsername)
    if (!user) return res.status(401).json({ success: false, message: "Invalid Credentials" })

    const matchPassword = await user.comparePassword(password)
    if (!matchPassword) return res.status(401).json({ success: false, message: "Invalid Credentials" })

    const token = await user.generateToken({ id: user._id })

    res.cookie("token", token)
    res.status(200).json({ success: true, message: "LoggedIn Successfully." })

})


const logout = () => {

    logoutSerivice()
    console.log("logout")
}


export { register, login, logout }