import { useDispatch } from "react-redux"
import { getMe, loginUser, registerUser } from "../services/auth.service"
import { setUser, setLoading } from "../stores/features/auth.slice"
import { useNavigate } from "react-router-dom"

const userAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        if (res.status === 200) {
            await handleGetMe()
        }
    }

    const handleGetMe = async () => {
        let user = await getMe()
        if (user.status !== 200) navigate("/login", { replace: true })
        dispatch(setUser(user.data.user))
        dispatch(setLoading(false))
    }

    return { handleRegister, handleLogin, handleGetMe }
}

export default userAuth