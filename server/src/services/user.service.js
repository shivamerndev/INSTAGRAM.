import userModel from "../models/user.model.js"

const registerService = async (data) => {
    const { username, email } = data;
    let isExist = await userModel.findOne({ $or: [{ username }, { email }] })
    if (isExist) return null;
    return await userModel.create(data)
}

const loginService = async (data) => {
    return await userModel.findOne({
        $or: [{ email: data }, { username: data }]
    }).select("+password")
}

const logoutSerivice = async () => {
    console.log("logout")
}

export { registerService, loginService, logoutSerivice }