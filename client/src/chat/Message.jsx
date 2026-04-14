import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ChatHeader from "./components/ChatHeader"
import ChatFooter from "./components/ChatFooter"
import ChatMessages from "./components/ChatMessages"
import { useEffect } from "react"
import useChat from "./useChat"
import ChatUserTile from "./components/ChatUserTile"
import { connectSocket, emitMsg, reciveMsg } from './io/Socket'

const Message = () => {

  const { chat } = useParams()

  const { handleGetChatUsers, handleChats } = useChat()
  const { user: { username, profileImage } } = useSelector(store => store.user)
  const chatUsers = useSelector(store => store.chats.chatUsers)


  useEffect(() => {
    handleGetChatUsers()
    connectSocket()
  }, [])


  useEffect(() => {
    reciveMsg("receive_message", (msg) => {
      handleChats(msg)
    })
  }, [])

  const sendMessage = (input) => {
    handleChats({ message: input, receiver: chat, sender: username })
    emitMsg("send_message", { message: input, receiver: chat, sender: username })
  }


  return <div className="w-full flex bg-black/50 h-full ">

    <div className=" text-white h-full flex-1  border-r border-zinc-800">
      <div className="flex flex-col justify-between px-4 py-3 border-b border-zinc-800">
        <h2 className="font-semibold text-xl">{username}</h2>
        <input className="border px-4 py-2 my-2 rounded-full " type="search" placeholder="Search" />
      </div>

      <div className="flex justify-around mb-4 text-sm text-gray-400 border-b border-zinc-800">
        {["primary", "General", "Requests"].map(e => <button key={e} className="py-2 border-b-2 border-white font-semibold text-white"> {e}</button>)}
      </div>
      {chatUsers.map((u, i) => <ChatUserTile key={i} user={u} />)}
    </div>

    {chat ?
      <div className="flex-3">
        <div className="flex flex-col justify-between h-screen  text-white w-full">

          <ChatHeader />
          <ChatMessages username={username} />
          <ChatFooter sendMessage={sendMessage} />

        </div>
      </div>
      : <div className="h-full flex items-center justify-center flex-3">Select A Person To continue Chat</div>}

  </div>
}

export default Message
