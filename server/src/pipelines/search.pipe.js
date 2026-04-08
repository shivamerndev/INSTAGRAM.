import { Types } from "mongoose"

export const searchPipeline = (query, id) => [
    {
        '$search': {
            'index': 'search_user',
            'autocomplete': {
                'query': query,
                'path': 'username'
            }
        }
    }, {
        '$lookup': {
            from: "follows",
            as: "followDoc",
            let: { searchUser: "$_id" },
            pipeline: [{
                $match: {
                    $expr: {
                        $and: [
                            { $eq: ["$follower", "$$searchUser"] },
                            { $eq: ["$followee", new Types.ObjectId(id)] } // don't use Schema.Types.ObjectId(id)
                        ]
                    }
                }
            }]
        }
    }, {
        '$addFields': {
            followStatus: {
                $cond: {
                    if: { $eq: [{ $size: "$followDoc" }, 0] },
                    then: null,
                    else: {
                        $cond: {
                            if: { $eq: [{ $arrayElemAt: ["$followDoc.status", 0] }, "pending"] },
                            then: "requested",
                            else: "following"
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
]