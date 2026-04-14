// 1. get camera
const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
});

// 2. create peer
const peerInstance = new RTCPeerConnection({
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" }
    ]
});

// 3. send stream
stream.getTracks().forEach(track => {
    peer.current.addTrack(track, stream);
});