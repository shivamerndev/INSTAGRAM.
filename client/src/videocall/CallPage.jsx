import React, { useEffect, useRef } from "react";
import VideoCall from "../components/VideoCall";
import { createPeerConnection } from "../utils/peerConnection";
import { getLocalStream } from "../utils/mediaStream";
import { registerSocketEvents } from "../utils/socketEvents";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const CallPage = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const setupCall = async () => {
      const peer = createPeerConnection();

      const stream = await getLocalStream();

      localVideoRef.current.srcObject = stream;

      stream.getTracks().forEach((track) => {
        peer.addTrack(track, stream);
      });

      peer.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", {
            candidate: event.candidate
          });
        }
      };

      registerSocketEvents(socket, remoteVideoRef);
    };

    setupCall();
  }, []);

  return (
    <VideoCall
      localVideoRef={localVideoRef}
      remoteVideoRef={remoteVideoRef}
    />
  );
};

export default CallPage;