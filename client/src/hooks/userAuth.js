import { useDispatch } from "react-redux"
import { getMe, loginUser, registerUser } from "../services/auth.service"
import { setUser } from "../stores/features/auth.slice"

const userAuth = () => {

    const dispatch = useDispatch()

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

        let res = await loginUser(payload)
    }

    const handleGetMe = async () => {
        let user = await getMe()
        dispatch(setUser(user.data.user))
    }

    return { handleRegister, handleLogin, handleGetMe }
}

export default userAuth