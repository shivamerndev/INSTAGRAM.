import { Image, InfoIcon, LucidePhoneCall, Sticker, VideoIcon } from "lucide-react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ChatLeftSide from "./components/ChatLeftSide"
import ChatHeader from "./components/ChatHeader"
import ChatFooter from "./components/ChatFooter"
import ChatMessages from "./components/ChatMessages"

const Message = () => {

  const { user: { username, profileImage } } = useSelector(store => store.user)
  const { chat } = useParams()


  let suggestUser = [{ username: "shivam" }, { username: "shivani" }, { username: "shiva" }]



  return <div className="w-full flex bg-black/50 h-full ">

    <ChatLeftSide suggestUser={suggestUser} data={{ username, profileImage }} />

    {chat ?
      <div className="flex-3">
        <div className="flex flex-col justify-between h-full bg-black text-white w-full">

          <ChatHeader data={{ username, profileImage }} />

          <div className="text-center text-xs text-gray-500">
            9/30/23, 12:55 PM
          </div>

          <ChatMessages />

          <ChatFooter />

        </div>
      </div>
      : <div className="h-full flex items-center justify-center flex-3">Select A Person To continue Chat</div>}

  </div>
}

export default Message
