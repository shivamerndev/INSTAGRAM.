const answerService = (io, socket) => {
  socket.on("answer", ({ answer, receiverId }) => {
    io.to(receiverId).emit("receive-answer", {
      answer
    });
  });
};

module.exports = answerService;