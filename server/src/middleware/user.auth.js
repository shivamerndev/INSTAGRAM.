import jwt from "jsonwebtoken"
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../config/env.config.js"

const userAuth = (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(400).json({ success: false, message: "Token Not Found." })
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded;
    next()
}

const refreshAccessToken = async (req, res, next) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: "No refresh token"
        });
    }

    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    req.user = decoded;

    next()

    // const newAccessToken = jwt.sign(
    //     { id: decoded.userId },
    //    JWT_SECRET,
    //     { expiresIn: "15m" }
    // );

    // res.json({
    //     accessToken: newAccessToken
    // });

};

export { userAuth, refreshAccessToken };