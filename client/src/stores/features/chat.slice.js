import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    chatUsers: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatUsers: (state, { payload }) => {
            state.chatUsers = payload;
        }
    }
})


export const { setChatUsers } = chatSlice.actions;
export default chatSlice.reducer;