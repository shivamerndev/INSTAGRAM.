import { loginService, logoutSerivice, registerService } from "../services/user.service.js"

const register = async (req, res) => {

    const { fullName, email, password, username } = req.body;
    if (!fullName, !email, !password, !username) return res.status(400).json({ message: "All Fields Are Required." })
    let response = await registerService(req.body)
    if (!response.success) return res.status(400).json(response)
    res.status(201).json({ message: "User Registered Successfully.", success: true })
}

const login = async (req, res) => {
    const { email, password, username } = req.body;
    let user = await loginService({ email, username })
    console.log(user)


}

const logout = () => {

    logoutSerivice()
    console.log("logout")
}


export { register, login, logout }