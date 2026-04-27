const offerService = (io, socket) => {
  socket.on("offer", ({ offer, receiverId, callerId }) => {
    io.to(receiverId).emit("receive-offer", {
      offer,
      callerId
    });
  });
};

module.exports = offerService;