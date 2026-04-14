import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    chatUsers: [],
    chats: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatUsers: (state, { payload }) => {
            state.chatUsers = payload;
        },
        setChats: (state, { payload }) => {
            state.chats.push(payload)
        }
    }
})


export const { setChatUsers, setChats } = chatSlice.actions;
export default chatSlice.reducer;