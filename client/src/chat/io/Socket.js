import { io } from 'socket.io-client';

let URI = "/socket.io";
let socket;

export const connectSocket = () => {
    socket = io(URI,{withCredentials:true});
    // console.log("Socket connected")
}

export const reciveMsg = (event, callback) => {
    socket.on(event, callback);
}

export const emitMsg = (event, msg) => {
    socket.emit(event, msg);
}