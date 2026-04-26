import React from "react";

const IncomingCallModal = ({ answerCall }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "250px"
      }}
    >
      <h3>Incoming Call...</h3>
      <button onClick={answerCall}>Accept Call</button>
    </div>
  );
};

export default IncomingCallModal;