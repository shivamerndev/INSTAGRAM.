import { getPeerConnection } from "./peerConnection";

export const registerSocketEvents = (
  socket,
  remoteVideoRef
) => {

  socket.on("receive-offer", async ({ offer }) => {
    const peer = getPeerConnection();

    await peer.setRemoteDescription(
      new RTCSessionDescription(offer)
    );

    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);

    socket.emit("answer", {
      answer
    });
  });

  socket.on("receive-answer", async ({ answer }) => {
    const peer = getPeerConnection();

    await peer.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  });

  socket.on("receive-ice-candidate", async ({ candidate }) => {
    const peer = getPeerConnection();

    await peer.addIceCandidate(
      new RTCIceCandidate(candidate)
    );
  });

  // remote stream
  const peer = getPeerConnection();

  peer.ontrack = (event) => {
    remoteVideoRef.current.srcObject =
      event.streams[0];
  };
};