import { useDispatch } from "react-redux"
import { getChatUsers } from "../services/chat.service"
import { setChatUsers } from "../stores/features/chat.slice"

const useChat = () => {

    const dispatch = useDispatch()

    const handleGetChatUsers = async () => {
        let res = await getChatUsers()
        dispatch(setChatUsers(res.data))
    }

    return { handleGetChatUsers }
}

export default useChat