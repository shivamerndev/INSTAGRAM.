import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    chatUsers: [],
    chats: [],
    currentUser: null
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatUsers: (state, { payload }) => {
            state.chatUsers = payload;
        },
        setChats: (state, { payload }) => {
            state.chats = [...payload]
        },
        appendChats: (state, { payload }) => {
            state.chats = [...state.chats, payload]
        },
        setCurrentUser: (state, { payload }) => {
            state.currentUser = payload;
        }
    }
})


export const { setChatUsers, setChats, setCurrentUser, appendChats } = chatSlice.actions;
export default chatSlice.reducer;