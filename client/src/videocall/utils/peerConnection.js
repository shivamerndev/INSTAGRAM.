import iceServers from "../../server/config/stunTurnConfig";

let peer;

export const createPeerConnection = () => {
  peer = new RTCPeerConnection(iceServers);

  return peer;
};

export const getPeerConnection = () => peer;