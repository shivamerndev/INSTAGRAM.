import { useRef, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

console.log(socket.connected)

function App() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const peer = useRef(null);

  useEffect(() => {
    start();
  }, []);

  const start = async () => {

    // 1. get camera
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    localVideo.current.srcObject = stream;

    // 2. create peer
    peer.current = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" }
      ]
    });

    // 3. send stream
    stream.getTracks().forEach(track => {
      peer.current.addTrack(track, stream);
    });

    // 4. receive remote video
    peer.current.ontrack = e => {
      remoteVideo.current.srcObject = e.streams[0];
    };

    // 5. ICE candidate
    peer.current.onicecandidate = e => {
      if (e.candidate) {
        socket.emit("candidate", e.candidate);
      }
    };

    // 6. create offer
    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);
    socket.emit("offer", offer);
  };

  // receive answer
  socket.on("answer", async answer => {
    await peer.current.setRemoteDescription(answer);
  });

  // receive candidate
  socket.on("candidate", async candidate => {
    await peer.current.addIceCandidate(candidate);
  });

  return (
    <>
      <video ref={localVideo} autoPlay muted width="300"/>
      <video ref={remoteVideo} autoPlay width="300"/>
    </>
  );
}

export default App;