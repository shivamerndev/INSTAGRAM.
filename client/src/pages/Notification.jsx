import { useEffect } from 'react';
import useFollow from '../hooks/useFollow';
import { useNavigate } from "react-router-dom"

const Notification = () => {
    const navigate = useNavigate()
    const { handleNotification, requests } = useFollow()

    useEffect(() => {
        handleNotification()
    }, [])

    console.log(requests)
    
    return (
        <section className="mx-auto w-full max-w-5xl space-y-6">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-white">Notifications</h1>
                    <p className="mt-2 text-sm text-slate-400">
                        {requests.length > 0
                            ? `You have ${requests.length} follow request${requests.length > 1 ? 's' : ''} waiting`
                            : 'You are all caught up right now.'}
                    </p>
                </div>
                <div className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100">
                    Pending: {requests.length}
                </div>
            </div>

            <div className="mx-auto">
                {requests.length > 0 ? (
                    <div className="space-y-4">
                        {requests.map((user) => (
                            <div
                                onClick={() => navigate("/" + user.follower.username)}
                                key={user.follower._id}
                                className="group flex cursor-pointer items-center gap-4 rounded-[1.8rem] border border-white/10 bg-white/10 p-5 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl transition hover:border-sky-400/20 hover:bg-white/10"
                            >
                                <div className="shrink-0">
                                    <img
                                        src={user.follower.profileImage}
                                        alt={user.follower.username}
                                        className="h-16 w-16 rounded-[1.4rem] object-cover ring-1 ring-white/10 transition duration-300 group-hover:scale-[1.02]"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-base font-semibold text-white">@{user.follower.username}</p>
                                    <p className="mt-1 text-sm text-slate-400">{user.follower.fullName || "New follow request"}</p>
                                </div>

                                <button className="shrink-0 rounded-full border border-sky-400/20 bg-sky-500/12 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/18">
                                    Review profile
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/12 bg-white/5 px-6 py-16 text-center">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-slate-950/60">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">No Notifications</h3>
                            <p className="text-slate-400">No pending follow requests right now.</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Notification
