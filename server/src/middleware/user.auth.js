

const userAuth = (req, res, next) => {
    const token = req.cookie
    if (!token) return res.status(400).json({ message: "Token Not Found." })
    const decode = token
}

export default userAuth;