import { InfoIcon, LucidePhoneCall, VideoIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ChatHeader = ({ data: { username, profileImage } }) => {

    const navigate = useNavigate()

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