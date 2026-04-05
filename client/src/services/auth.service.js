import axios from "../utils/axios.utility"
import handleError from "../utils/error.utility"

const registerUser = handleError(async (data) => {
    return await axios.post("/user/register", data)
})

const loginUser = handleError((data) => {
    return axios.post("/user/login", data)
})

const getMe = handleError(async () => {
    return await axios.get("/user/profile")
})

const logout = handleError(async () => {
    return await axios.post("/user/logout")
})

const googleLogin = handleError(async (credentialResponse) => {
   return await axios.post("/auth/google", { idToken: credentialResponse.credential });
})

export { registerUser, loginUser, getMe, logout, googleLogin }