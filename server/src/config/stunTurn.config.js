const iceServers = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302"
    },

    // Add TURN server for production
    {
      urls: "turn:your-turn-server.com:3478",
      username: "yourUsername",
      credential: "yourPassword"
    }
  ]
};

module.exports = iceServers;