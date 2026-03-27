import { loginUser, registerUser } from "../services/auth.service"
import handleError from "../utils/error.utility"

const userAuth = () => {
    
    const handleRegister = (data) => {
         registerUser(data)
    }

    const handleLogin = async (data) => {
        await loginUser(data)
    }

    return { handleRegister, handleLogin }
}

export default userAuth