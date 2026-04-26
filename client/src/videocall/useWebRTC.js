import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createPeerConnection } from "../utils/peerConnection";
import { getLocalStream } from "../utils/mediaStream";
import {
  setIncomingCall,
  setCallAccepted,
  endCurrentCall
} from "../context/CallSlice";

const useWebRTC = (socket) => {
  const dispatch = useDispatch();

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  let peer;
  let localStream;

  // Start call
  const startCall = async (receiverId) => {
    peer = createPeerConnection();

    localStream = await getLocalStream();

    localVideoRef.current.srcObject = localStream;

    localStream.getTracks().forEach((track) => {
      peer.addTrack(track, localStream);
    });

    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);

    socket.emit("offer", {
      offer,
      receiverId
    });
  };

  // Answer call
  const answerCall = async (offer, callerId) => {
    peer = createPeerConnection();

    localStream = await getLocalStream();

    localVideoRef.current.srcObject = localStream;

    localStream.getTracks().forEach((track) => {
      peer.addTrack(track, localStream);
    });

    await peer.setRemoteDescription(offer);

    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);

    socket.emit("answer", {
      answer,
      receiverId: callerId
    });

    dispatch(setCallAccepted(true));
  };

  // ICE candidate
  const handleIceCandidate = (receiverId) => {
    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          candidate: event.candidate,
          receiverId
        });
      }
    };
  };

  // Remote stream
  const handleRemoteStream = () => {
    peer.ontrack = (event) => {
      remoteVideoRef.current.srcObject =
        event.streams[0];
    };
  };

  // End call
  const endCall = () => {
    peer.close();

    localStream.getTracks().forEach((track) => {
      track.stop();
    });

    dispatch(endCurrentCall());
  };

  // Mute mic
  const toggleMic = () => {
    localStream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
  };

  // Turn off camera
  const toggleCamera = () => {
    localStream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
  };

  return {
    localVideoRef,
    remoteVideoRef,
    startCall,
    answerCall,
    handleIceCandidate,
    handleRemoteStream,
    endCall,
    toggleMic,
    toggleCamera
  };
};

export default useWebRTC;