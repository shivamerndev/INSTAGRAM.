import { useDispatch } from "react-redux"
import { getMe, googleLogin, loginUser, logout, registerUser } from "../services/auth.service"
import { setUser, setLoading } from "../stores/features/auth.slice"
import { useNavigate } from "react-router-dom"

const useUserAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleLogin = async (credentialResponse) => {
        const res = await googleLogin(credentialResponse)
        if (res.status === 200 || res.status === 201) {
            await handleGetMe()
        }
    }

    const handleRegister = async (data) => {
        const res = await registerUser(data)
        if (res.status === 200) {
            await handleGetMe()
        }
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

    const handleLogout = async () => {
        await logout()
        navigate("/login", { replace: true })
        dispatch(setUser(null))
    }

    const handleGetMe = async () => {
        let user = await getMe()
        if (user.status !== 200) navigate("/login", { replace: true })
        dispatch(setUser(user.data.user))
        dispatch(setLoading(false))
    }

    return { handleRegister, handleLogin, handleLogout, handleGetMe, handleGoogleLogin }
}

export default useUserAuth
