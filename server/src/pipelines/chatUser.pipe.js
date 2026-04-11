

export const chatUserPipeline = (mongoseId) => [
    {
        $match: {
            status: "accepted",
            $or: [
                { follower: mongoseId },
                { followee: mongoseId }
            ]
        }
    },
    {
        $project: {
            user: {
                $cond: [{ $eq: ["$follower", mongoseId] },
                    "$followee",
                    "$follower"
                ]
            }
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "user"
        }
    },
    { $unwind: "$user" },
    {
        $project: {
            username: "$user.username",
            fullName: "$user.fullName",
            profileImage: "$user.profileImage"
        }
    }
]