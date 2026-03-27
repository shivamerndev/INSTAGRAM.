import axios from "../utils/axios.utility"
import handleError from "../utils/error.utility"

const registerUser = handleError(async (data) => {
    return await axios.post("/user/register", data)
})

const loginUser = handleError((data) => {
    return axios.post("/user/login", data)
})

const getMe = async () => {
    return await axios.get("/user/getMe")
}

const logout = async () => {
    return await axios.post("/user/logout")
}

export { registerUser, loginUser, getMe, logout }