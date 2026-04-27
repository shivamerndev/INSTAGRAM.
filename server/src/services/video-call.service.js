const handleVideoCallEvents = (socket, io, onlineUsers) => {

    // initiate video call
    socket.on("initiate-call", ({ callerId, receiverId, callType, callerInfo }) => {

        const receiverSocketId = onlineUsers.get(receiverId);

        if (receiverSocketId) {

            const callId = `${callerId}-${receiverId}-${Date.now()}`

            io.to(receiverSocketId).emit("incoming-call", {
                callerId,
                callerName: callerInfo.username,
                callerAvatar: callerInfo.profileImage,
                callId,
                callerInfo
            });
        } else {
            console.log("Reciver is offline", receiverId)
            console.log("Call failed", { reason: "user is offline" })
        }
    });

    // Accept video call
    socket.on("accept-call", ({ callerId, callId, receiverInfo }) => {

        const callerSocketId = onlineUsers.get(callerId);

        if (callerSocketId) {

            io.to(callerSocketId).emit("call_accepted", {
                callerName: receiverInfo.username,
                callerAvatar: receiverInfo.profileImage,
                callId,
            });
        } else {
            console.log("Caller Not Found.", callerId)
        }
    });

    // Reject video call
    socket.on("reject-call", ({ callerId, callId }) => {

        const callerSocketId = onlineUsers.get(callerId);

        if (callerSocketId) io.to(callerSocketId).emit("call_rejected", { callId });
    });

    // End video call
    socket.on("end-call", ({ callerId, participantId }) => {

        const participantSocketId = onlineUsers.get(participantId);

        if (participantSocketId) io.to(participantSocketId).emit("call_ended", { callId });
    });


}