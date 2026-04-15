import { useDispatch } from "react-redux"
import { getChatUsers, getMessages } from "./chat.service"
import { setChats, setChatUsers, setCurrentUser, appendChats } from "./chat.slice"

const useChat = () => {

    const dispatch = useDispatch()

    const handleGetChatUsers = async () => {
        let res = await getChatUsers()
        dispatch(setChatUsers(res.data))
    }

    const handleGetMessages = async (receiverId) => {
        let res = await getMessages(receiverId)
        dispatch(setCurrentUser(res.data.chatUser))
        dispatch(setChats(res.data.chats))
    }

    const handleAppendChats = async (chat) => {
        dispatch(appendChats(chat))
    }

    return { handleGetChatUsers, handleGetMessages, handleAppendChats }
}

export default useChat