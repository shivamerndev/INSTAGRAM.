import axios from "../utils/axios.utility"
import handleError from "../utils/error.utility"

const registerUser = handleError(async (data) => {
    return await axios.post("/user/register", data)
})

const loginUser = handleError((data) => {
    return axios.post("/user/login", data)
})

const getMe = async () => {
    return await axios.get("/user/profile")
}

const logout = async () => {
    return await axios.post("/user/logout")
}

const searchUser = async (query) => {
    return await axios.get(`/user/search?text=${query}`)
}

export { registerUser, loginUser, getMe, logout, searchUser }