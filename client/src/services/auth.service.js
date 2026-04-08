import axios from "../utils/axios.utility"
import handleError from "../utils/error.utility"

const registerUser = handleError(async (data) => {
    return await axios.post("/auth/register", data)
})

const loginUser = handleError((data) => {
    return axios.post("/auth/login", data)
})

const getMe = handleError(async () => {
    return await axios.get("/auth/profile")
})

const logout = handleError(async () => {
    return await axios.post("/auth/logout")
})

const googleLogin = handleError(async (credentialResponse) => {
    return await axios.post("/auth/google", { idToken: credentialResponse.credential });
})

export { registerUser, loginUser, getMe, logout, googleLogin }