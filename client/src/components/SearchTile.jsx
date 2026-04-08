import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import useFollow from "../hooks/useFollow"

const SearchTile = ({ user }) => {

    const { username } = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const [follow, setFollow] = useState("Follow")
    const { handleFollowUser } = useFollow()

    return <div onClick={() => navigate(`/${user.username}`)} className="flex items-center gap-4 p-4 bg-[#18181c] rounded-lg shadow border border-white/10 w-full max-w-md mb-2">
        <img
            src={user.profileImage}
            alt={user.fullName}
            className="w-12 h-12 rounded-full object-cover border border-[#c799ff] bg-[#23232a]"
        />
        <div className="flex flex-col">
            <span className="font-semibold text-white">{user.fullName}</span>
            <span className="text-gray-400 text-sm">@{user.username}</span>
        </div>
        {username !== user.username && <button onClick={(e) => {
            e.stopPropagation()
            setFollow(!follow)
            handleFollowUser(user._id).then(res => setFollow(res.success && "Requested"))
        }} className="ml-auto px-4 cursor-pointer min-w-30 h-8 bg-[#00a6ff] text-white rounded-lg font-semibold transition-colors duration-150 shadow border border-[#c799ff]/30">
            {user.followStatus || follow}
        </button>}
    </div>
}

export default SearchTile;