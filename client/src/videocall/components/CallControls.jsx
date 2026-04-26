import React from "react";

const CallControls = ({ endCall, toggleMic, toggleCamera }) => {
  return (
    <div>
      <button onClick={toggleMic}>Mute/Unmute</button>
      <button onClick={toggleCamera}>Camera On/Off</button>
      <button onClick={endCall}>End Call</button>
    </div>
  );
};

export default CallControls;