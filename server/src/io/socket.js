import { Server } from "socket.io"
import http from "http"
import app from "../app.js"
import socketAuth from "./socket.auth.js";


const httpServer = http.createServer(app)

const io = new Server(httpServer, { cors: { origin: "http://localhost:5173", methods: ["GET", 'POST'], credentials: true } })


io.use(socketAuth);


io.on('connection', (socket) => {

    console.log('A user connected');

    socket.join(socket.user.username)

    socket.on("send_message", data => {

        const { message, receiver } = data
        io.to(receiver).emit("receive_message", {
            message,
            sender: socket.user.username,
        })
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.leave(socket.user.id)
    });
});


export default httpServer;