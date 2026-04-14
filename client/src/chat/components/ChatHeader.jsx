import { InfoIcon, LucidePhoneCall, VideoIcon } from "lucide-react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ChatHeader = () => {

    const navigate = useNavigate()
    const {  username, profileImage } = useSelector(store => store.chats?.currentUser)


    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
                <img
                    src={profileImage}
                    alt="Shivam"
                    className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold">{username}</p>
            </div>
            <div className="flex gap-4 text-xl text-gray-300">
                <button> <LucidePhoneCall /> </button>
                <button onClick={() => navigate("/video-call")} ><VideoIcon /></button>
                <button value={'dets'} className=" :details"><InfoIcon /></button>
            </div>
        </div>
    )
}

export default ChatHeader