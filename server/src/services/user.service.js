import userModel from "../models/user.model.js"
import followModel from "../models/follow.model.js"

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

const searchUserService = async (query, id) => {
    // return await userModel.find({ username: { $regex: query, $options: "i" } }).select("fullName username profileImage")
    return await userModel.aggregate([
        {
            '$search': {
                'index': 'default',
                'autocomplete': {
                    'query': query,
                    'path': 'username'
                }
            }
        }, {
            '$lookup': {
                'from': 'follows',
                'as': 'followDoc',
                'let': { 'searchUser': '$username' },
                'pipeline': [
                    {
                        '$match': {
                            '$expr': {
                                '$and': [
                                    { '$eq': ['$follower', id] },
                                    { '$eq': ['$followee', '$$searchUser'] }
                                ]
                            }
                        }
                    }
                ]
            }
        }, {
            '$addFields': {
                'followStatus': {
                    '$cond': {
                        'if': { '$lt': [{ '$size': '$followDoc' }, 1] },
                        'then': null,
                        'else': {
                            '$cond': {
                                'if': { '$eq': [{ '$arrayElemAt': ['$followDoc.status', 0] }, 'pending'] },
                                'then': 'requested',
                                'else': 'following'
                            }
                        }
                    }
                }
            }
        }, {
            $project: {
                profileImage: 1,
                username: 1,
                fullName: 1,
                followStatus: 1
            }
        }
    ])
}

const followUserService = async (data) => {
    return await follow
}

export { registerService, loginService, profileService, logoutSerivice, searchUserService }