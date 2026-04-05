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

const searchUserService = async (query) => {
    // return await userModel.find({ username: { $regex: query, $options: "i" } }).select("fullName username profileImage")
    return await userModel.aggregate([
        {
            $search: {
                index: "default",
                autocomplete: { query, path: "username", }
            }
        },
        {
            $project: { username: 1, fullName: 1, profileImage: 1, score: { $meta: "searchScore" } }
        }
    ])
}

export { registerService, loginService, profileService, logoutSerivice, searchUserService }