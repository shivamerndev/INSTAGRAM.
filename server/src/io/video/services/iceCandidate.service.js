const iceCandidateService = (io, socket) => {
  socket.on("ice-candidate", ({ candidate, receiverId }) => {
    io.to(receiverId).emit("receive-ice-candidate", {
      candidate
    });
  });
};

module.exports = iceCandidateService;