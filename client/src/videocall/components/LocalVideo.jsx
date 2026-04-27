import React from "react";

const LocalVideo = ({ localVideoRef }) => {
  return (
    <div>
      <h3>My Video</h3>
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "300px", border: "1px solid black" }}
      />
    </div>
  );
};

export default LocalVideo;