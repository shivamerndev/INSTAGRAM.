import axiosUtility from '../utils/axios.utility'
import handleError from "../utils/error.utility"


const searchUser = handleError(async (query) => {
    return await axiosUtility.get(`/user/search?text=${query}`)
})

const userProfile = handleError(async (username) => {
    return await axiosUtility.get("/user/"+username)
})

const followUser = handleError(async (data) => {
    return await axiosUtility.post("/user/follow", data)
})

const notification = handleError(async () => {
    return await axiosUtility.get("/user/follow-requests")
})


export { searchUser, followUser, notification, userProfile }