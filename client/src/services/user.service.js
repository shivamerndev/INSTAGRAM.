import axiosUtility from '../utils/axios.utility'

const searchUser = async (query) => {
    return await axiosUtility.get(`/user/search?text=${query}`)
}

const followUser = async (data) => {
    return await axiosUtility.post("/user/follow", data)
}

const notification = async ()=>{
    return await axiosUtility.get("/user/notify")
}

export { searchUser, followUser,notification }