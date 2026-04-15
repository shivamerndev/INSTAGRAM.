import axiosUtility from "../utils/axios.utility.js"

const getChatUsers = () => {
    return axiosUtility.get("/chat/users")
}

const getMessages = (receiverId) => {
    return axiosUtility.get("/chat/" + receiverId)
}

export { getChatUsers,getMessages }