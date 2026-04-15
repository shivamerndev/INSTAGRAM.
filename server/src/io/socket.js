import { Server } from "socket.io"
import http from "http"
import app from "../app.js"
import socketAuth from "./socket.auth.js";
import messageModel from "../models/message.model.js"


const httpServer = http.createServer(app)

const io = new Server(httpServer, { cors: { origin: "http://localhost:5173", methods: ["GET", 'POST'], credentials: true } })


io.use(socketAuth);


io.on('connection', (socket) => {

    console.log('A user connected');

    let connectedUser = socket.user.id;

    socket.join(connectedUser)

    socket.on("send_message", data => {

        const { message, receiver } = data

        io.to(receiver).emit("receive_message", { message, sender: connectedUser })

        let chat = new messageModel({
            sender: connectedUser,
            receiver,
            content:message
        })

        chat.save()
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.leave(socket.user.id)
    });
});


export default httpServer;