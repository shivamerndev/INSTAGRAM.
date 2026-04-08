import userModel from "../models/user.model.js"


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


export { registerService, loginService, profileService, logoutSerivice }