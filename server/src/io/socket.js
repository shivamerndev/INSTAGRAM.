import { Server } from "socket.io"
import http from "http"
import app from "../app.js"

const httpServer = http.createServer(app)

const io = new Server(httpServer, { cors: { origin: "http://localhost:5173", methods: ["GET", 'POST'] } })

io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id)
    socket.on("disconnect", () => {
        console.log("user disconnected: " + socket.id)
    })
    socket.on("client", (msg) => {
        console.log(msg)
        socket.broadcast.emit("server", msg)
    })
})


export default httpServer;