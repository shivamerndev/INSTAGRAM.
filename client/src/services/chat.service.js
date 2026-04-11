import axiosUtility from "../utils/axios.utility.js"

const getChatUsers = () => {
    return axiosUtility.get("/chat/users")
}

export { getChatUsers }