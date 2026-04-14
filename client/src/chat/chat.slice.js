import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    chatUsers: [],
    chats: [],
    currentUser:null
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
        },
        setCurrentUser :(state,{payload})=>{
            state.currentUser = payload;
        }
    }
})


export const { setChatUsers, setChats,setCurrentUser } = chatSlice.actions;
export default chatSlice.reducer;