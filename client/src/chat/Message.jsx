import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ChatLeftSide from "./components/ChatLeftSide"
import ChatHeader from "./components/ChatHeader"
import ChatFooter from "./components/ChatFooter"
import ChatMessages from "./components/ChatMessages"
import { useEffect } from "react"
import useChat from "../hooks/useChat"

const Message = () => {

  const { handleGetChatUsers } = useChat()
  const { user: { username, profileImage } } = useSelector(store => store.user)
  const { chatUsers } = useSelector(store => store.chats)
  const { chat } = useParams()

  useEffect(() => {
    handleGetChatUsers()
  }, [])


  return <div className="w-full flex bg-black/50 h-full ">

    <ChatLeftSide chatUsers={chatUsers} data={{ username, profileImage }} />

    {chat ?
      <div className="flex-3">
        <div className="flex flex-col justify-between h-screen  text-white w-full">

          <ChatHeader data={{ username, profileImage }} />
          <ChatMessages />
          <ChatFooter />

        </div>
      </div>
      : <div className="h-full flex items-center justify-center flex-3">Select A Person To continue Chat</div>}

  </div>
}

export default Message
