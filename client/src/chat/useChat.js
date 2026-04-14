import { useDispatch } from "react-redux"
import { getChatUsers } from "../services/chat.service"
import { setChats, setChatUsers, setCurrentUser } from "./chat.slice"

const useChat = () => {

    const dispatch = useDispatch()

    const handleGetChatUsers = async () => {
        let res = await getChatUsers()
        dispatch(setChatUsers(res.data))
    }

    const handleSetCurrentUser = async (user)=>{
        dispatch(setCurrentUser(user))
    }

    const handleChats = async (chat) => {
        dispatch(setChats(chat))
    }

    return { handleGetChatUsers, handleSetCurrentUser, handleChats }
}

export default useChat