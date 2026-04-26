import React from "react";
import LocalVideo from "./LocalVideo";
import RemoteVideo from "./RemoteVideo";
import CallControls from "./CallControls";
import IncomingCallModal from "./IncomingCallModal";

const VideoCall = ({
  localVideoRef,
  remoteVideoRef,
  callAccepted,
  incomingCall,
  answerCall,
  endCall,
  toggleMic,
  toggleCamera
}) => {
  return (
    <div>
      <h2>Video Call</h2>

      {incomingCall && !callAccepted && (
        <IncomingCallModal answerCall={answerCall} />
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        <LocalVideo localVideoRef={localVideoRef} />
        <RemoteVideo remoteVideoRef={remoteVideoRef} />
      </div>

      <CallControls
        endCall={endCall}
        toggleMic={toggleMic}
        toggleCamera={toggleCamera}
      />
    </div>
  );
};

export default VideoCall;