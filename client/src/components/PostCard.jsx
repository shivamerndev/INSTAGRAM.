

import React, { useState } from "react";

function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
}

const PostCard = () => {
    
    let post = {
        "_id": "69cce1992678dbe2518d9d82",
        "caption": "Ram Siya Ram.2",
        "media": [
            {
                "url": "https://ik.imagekit.io/shivamerndev/Js_battle_vcWr17Fu4.png",
                "mediaType": "image",
                "_id": "69cce1992678dbe2518d9d83"
            },
            {
                "url": "https://ik.imagekit.io/shivamerndev/profile_RPMMYvSx1.jpeg",
                "mediaType": "image",
                "_id": "69cce1992678dbe2518d9d84"
            },
            {
                "url": "https://ik.imagekit.io/shivamerndev/wp3366737-how-to-open-wallpaper-images_wPCvwD2Pz.png",
                "mediaType": "image",
                "_id": "69cce1992678dbe2518d9d85"
            }
        ],
        "user": {
            "_id": "69c57bea4515f342c44abd8c",
            "fullName": "Shivam Kumar",
            "username": "shivam81",
            "email": "s@s.ins",
            "bio": "",
            "profileImage": "",
            "isPrivate": false,
            "createdAt": "2026-03-26T18:33:14.764Z",
            "updatedAt": "2026-03-26T18:33:14.764Z",
            "__v": 0
        },
        "likeCount": 0,
        "commentNumber": 0,
        "createdAt": "2026-04-01T09:12:57.948Z",
        "updatedAt": "2026-04-01T09:12:57.948Z",
        "__v": 0
    }

    const [mediaIndex, setMediaIndex] = useState(0);
    const { user, caption, media, likeCount, commentNumber, createdAt } = post;
    const profileImage = user.profileImage || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.fullName);

    const handlePrev = (e) => {
        e.stopPropagation();
        setMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };
    const handleNext = (e) => {
        e.stopPropagation();
        setMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    return (
        <article className="bg-[#131313] rounded-xl w-10/12 mx-auto shadow-2xl border border-white/5">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                        src={profileImage}
                        alt={user.username}
                    />
                    <div>
                        <h3 className="text-sm font-bold text-white leading-none">{user.fullName}</h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">@{user.username}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-white pb-2 flex">
                    <span className="text-xl mb-2 font-bold tracking-widest leading-none">...</span>
                </button>
            </div>

            {/* Media Carousel */}
            <figure className="w-full overflow-hidden relative group bg-neutral-900 border-y border-white/5 flex items-center justify-center" style={{ minHeight: 350 }}>
                {media.length > 1 && (
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
                        onClick={handlePrev}
                        aria-label="Previous image"
                    >
                        &#8592;
                    </button>
                )}
                <img
                    className="max-h-[400px] w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105 mx-auto"
                    src={media[mediaIndex].url}
                    alt={`Post media ${mediaIndex + 1}`}
                />
                {media.length > 1 && (
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        &#8594;
                    </button>
                )}
                {media.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {media.map((_, idx) => (
                            <span
                                key={idx}
                                className={`block w-2 h-2 rounded-full ${idx === mediaIndex ? "bg-[#c799ff]" : "bg-gray-500/40"}`}
                            ></span>
                        ))}
                    </div>
                )}
            </figure>

            {/* Actions & Info */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-[#c799ff] transition-colors">
                            {/* Like Icon */}
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="text-white hover:text-[#c799ff] transition-colors">
                            {/* Comment Icon */}
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </button>
                        <button className="text-white hover:text-[#c799ff] transition-colors">
                            {/* Share Icon */}
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                    <button className="text-white hover:text-[#c799ff] transition-colors">
                        {/* Save Icon */}
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <p className="text-[13px] text-white">
                        <span className="font-bold">{likeCount}</span> {likeCount === 1 ? "like" : "likes"}
                    </p>
                    <span className="text-gray-500">·</span>
                    <p className="text-[13px] text-white">
                        <span className="font-bold">{commentNumber}</span> {commentNumber === 1 ? "comment" : "comments"}
                    </p>
                </div>
                <div className="text-sm mb-2">
                    <span className="font-bold mr-2">{user.username}</span>
                    <span className="text-[#adaaaa]">{caption}</span>
                </div>
                <button className="text-[#767575] text-[13px] mb-2 hover:text-[#adaaaa] transition-colors">
                    View all {commentNumber} comments
                </button>
                <p className="text-[10px] text-[#767575] uppercase tracking-widest font-bold">
                    {timeAgo(createdAt)}
                </p>
            </div>
        </article>
    );
};

export default PostCard;