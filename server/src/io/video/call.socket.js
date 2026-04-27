const offerService = require("../services/offerService");
const answerService = require("../services/answerService");
const iceCandidateService = require("../services/iceCandidateService");

const callSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    offerService(io, socket);
    answerService(io, socket);
    iceCandidateService(io, socket);

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

module.exports = callSocket;