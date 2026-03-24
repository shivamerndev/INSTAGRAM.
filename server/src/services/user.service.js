import userModel from "../models/user.model.js"

const registerService = async (data) => {
    const { username, email } = data;
    let isExist = await userModel.findOne({ $or: [{ username, email }] })

    if (isExist) return { meassage: "User Already Exists.", success: false }

    return await userModel.create(data)
}


const loginService = async (data) => {

    const { username, email } = data;

    return await userModel.findOne({
        $or: [{ email }, { username }]
    })
}

const logoutSerivice = async () => {
    console.log("logout")
}

export { registerService, loginService, logoutSerivice }