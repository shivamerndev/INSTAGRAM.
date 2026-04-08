import { useEffect } from 'react';
import useFollow from '../hooks/useFollow';
import { useNavigate } from "react-router-dom"

const Notification = () => {

    const navigate = useNavigate()

    const { handleNotification, requests } = useFollow()

    useEffect(() => {
        handleNotification()
    }, [])

    return (
        <div className="h-screen bg-black p-6">
            {/* Header Section */}
            <div className="mb-8">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
                    <p className="text-gray-400">
                        {requests.length > 0
                            ? `You have ${requests.length} follow request${requests.length > 1 ? 's' : ''}`
                            : 'No pending requests'}
                    </p>
                </div>
                <div className="h-px bg-linear-to-r from-[#c799ff] to-transparent opacity-30 mb-6"></div>
            </div>

            {/* Notifications Container */}
            <div className=" mx-auto">
                {requests.length > 0 ? (
                    <div className="space-y-3">
                        {requests.map((user) => (
                            <div onClick={() => navigate("/" + user.follower.username)}
                                key={user.follower._id}
                                className="flex items-center gap-4 p-4 bg-[#18181c] rounded-xl border border-white/10 hover:border-[#c799ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#c799ff]/10 group"
                            >
                                {/* User Avatar */}
                                <div className="shrink-0">
                                    <img
                                        src={user.follower.profileImage}
                                        alt={user.follower.username}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#c799ff] bg-[#23232a] group-hover:shadow-lg group-hover:shadow-[#c799ff]/40 transition-all duration-300"
                                    />
                                </div>

                                <span className="text-lg font-semibold truncate">@{user.follower.username}</span>

                                {/* Action Buttons */}
                                <div onClick={(e)=>e.stopPropagation()} className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => handleAccept(user.follower.id)}
                                        className="px-5 cursor-pointer py-2 bg-linear-to-r from-[#00a6ff] to-[#0080cc] hover:from-[#00d4ff] hover:to-[#0099ff] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#00a6ff]/30 transform hover:scale-105 active:scale-95 border border-[#00a6ff]/50 hover:border-[#00d4ff]"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => handleReject(user.follower.id)}
                                        className="px-5 cursor-pointer py-2 bg-[#2a2a2a] hover:bg-[#ff3b3b]/20 text-gray-200 hover:text-[#ff6b6b] font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#ff3b3b]/20 border border-white/10 hover:border-[#ff6b6b]/50 active:scale-95"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center py-12 px-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#18181c] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">No Notifications</h3>
                            <p className="text-gray-400">You're all caught up! No pending follow requests.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notification