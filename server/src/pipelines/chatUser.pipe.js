

export const chatUserPipeline = (mongoseId) => {

    return [
        {
            $match: {
                status: "accepted",
                $or: [{ follower: mongoseId }, { followee: mongoseId }]
            }
        },
        {
            $project: {
                user: {
                    $cond: [{ $eq: ["$follower", mongoseId] }, "$followee", "$follower"]
                }
            }
        },
        {
            $group: {
                _id: "$user",
                user: { $first: '$$ROOT' }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "user.user",
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
}



// [
//     {
//         $match: {
//             $or: [
//                 { followee: mongoseId },
//                 { follower: mongoseId }
//             ],
//             status: 'accepted'
//         }
//     },
//     {
//         $addFields: {
//             user: {
//                 $cond: {
//                     if: { $eq: ['$follower', mongoseId] },
//                     then: '$followee',
//                     else: '$follower'
//                 }
//             }
//         }
//     },
//     { $project: { user: 1 } },
//     {
//         $group: {
//             _id: '$_id',
//             user: { $first: '$$ROOT' }
//         }
//     },
//     {
//         $project: {
//             _id: '$user._id',
//             user: '$user.user'
//         }
//     },
//     {
//         $lookup: {
//             from: "users",
//             localField: "user",
//             foreignField: "_id",
//             as: "userData"
//         }
//     },
//     {
//         $unwind: {
//             path: "$userData"
//         }
//     },
//     {
//         $project: {
//             username: "$userData.username",
//             fullName: "$userData.fullName",
//             profileImage: "$userData.profileImage"
//         }
//     }
// ]