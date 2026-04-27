import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomingCall: null,
  callAccepted: false,
  callEnded: false
};

const videoSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    setIncomingCall: (state, action) => {
      state.incomingCall = action.payload;
    },

    setCallAccepted: (state, action) => {
      state.callAccepted = action.payload;
    },

    endCurrentCall: (state) => {
      state.callEnded = true;
      state.callAccepted = false;
      state.incomingCall = null;
    }
  }
});

export const {
  setIncomingCall,
  setCallAccepted,
  endCurrentCall
} = videoSlice.actions;

export default videoSlice.reducer;