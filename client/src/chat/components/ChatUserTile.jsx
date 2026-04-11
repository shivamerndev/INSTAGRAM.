import { useNavigate } from "react-router-dom"

const ChatUserTile = ({ user: { username, profileImage: image } }) => {

    const navigate = useNavigate()


    return (<div onClick={() => navigate("/messages/" + username)} className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer">
        <img src={image} alt='' className="h-10 w-10 rounded-full object-cover" />
        <div >
            <p className="font-semibold">{username}</p>
            <p className="text-gray-400 text-sm">hii •1h</p>
        </div>
    </div>
    )
}

export default ChatUserTile