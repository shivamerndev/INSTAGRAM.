import React from "react";

const RemoteVideo = ({ remoteVideoRef }) => {
    return (
        <div>
            <h3>Remote Video</h3>
            <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                style={{ width: "300px", border: "1px solid black" }}
            />
        </div>
    );
};

export default RemoteVideo;