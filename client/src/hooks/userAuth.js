import { loginUser, registerUser } from "../services/auth.service"

const userAuth = () => {

    const handleRegister = (data) => {
        registerUser(data)
    }

    const handleLogin = async (data) => {
        const emailRegex = /^\S+@\S+.\S+$/
        const isEmail = emailRegex.test(data.EmailOrUsername)

        let payload = {
            [isEmail ? "email" : 'username']: data.EmailOrUsername,
            password: data.password
        }

        await loginUser(payload)
    }

    return { handleRegister, handleLogin }
}

export default userAuth