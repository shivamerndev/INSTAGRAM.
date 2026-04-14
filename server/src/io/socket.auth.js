import { parse } from "cookie";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.config.js";


export default (socket, next) => {

    const cookies = socket.handshake.headers.cookie || "";
    const parsedCookies = parse(cookies).token;

    try {

        const decoded = jwt.verify(parsedCookies, JWT_SECRET)
        socket.user = decoded;
        next()

    } catch (err) {
        next(err)
    }
}