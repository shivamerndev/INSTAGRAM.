import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import useFollow from "../hooks/useFollow"

const SearchTile = ({ user }) => {
    const { handleFollowUser, followBtn } = useFollow()
    const navigate = useNavigate()

    const [followStatus, setFollow] = useState("Follow")
    const { username } = useSelector(state => state.user.user)

    return (
        <div
            onClick={() => navigate(`/${user.username}`)}
            className="flex w-full items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_55px_-40px_rgba(15,23,42,0.95)] backdrop-blur-xl transition hover:border-sky-400/20 hover:bg-white/[0.08]"
        >
            <img
                src={user.profileImage}
                alt={user.fullName}
                className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div className="min-w-0">
                <span className="block truncate text-base font-semibold text-white">{user.fullName}</span>
                <span className="block truncate text-sm text-slate-400">@{user.username}</span>
            </div>
            {username !== user.username && (
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleFollowUser(user._id).then(() =>
                            setFollow(() => followStatus === user.followStatus ? "Follow" : "Requested")
                        )
                    }}
                    className="ml-auto cursor-pointer rounded-full border border-sky-400/20 bg-sky-500/12 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20"
                >
                    {followBtn ? followStatus : user.followStatus ? user.followStatus : "Follow"}
                </button>
            )}
        </div>
    )
}

export default SearchTile;
