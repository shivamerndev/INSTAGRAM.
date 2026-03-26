import { loginUser, registerUser } from "../services/auth.service"
import handleError from "../utils/error.utility"

const userAuth = () => {
    const handleRegister = handleError((data) => {
        registerUser(data)
    })
    const handleLogin = (data) => {
        console.log(data,"or email both option")
        // loginUser(data)
    }
    return { handleRegister, handleLogin }
}

export default userAuth