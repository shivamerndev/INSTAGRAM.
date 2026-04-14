import { useDispatch } from "react-redux"
import { getChatUsers } from "../services/chat.service"
import { setChats, setChatUsers } from "./chat.slice"

const useChat = () => {

    const dispatch = useDispatch()

    const handleGetChatUsers = async () => {
        let res = await getChatUsers()
        dispatch(setChatUsers(res.data))
    }

    const handleChats = async (chat) => {
        dispatch(setChats(chat))
    }

    return { handleGetChatUsers,handleChats }
}

export default useChat