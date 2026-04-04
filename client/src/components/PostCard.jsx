import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

const PostCard = ({ post }) => {

    const [mediaIndex, setMediaIndex] = useState(0);

    const { user: { profileImage,username,fullName }, caption, media, likeCount, commentNumber, createdAt } = post;

    const handlePrev = (e) => {
        e.stopPropagation();
        setMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };
    const handleNext = (e) => {
        e.stopPropagation();
        setMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    function timeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);

        const seconds = Math.floor((now - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return `${seconds} seconds ago`;
        if (minutes < 60) return `${minutes} minutes ago`;
        if (hours < 24) return `${hours} hours ago`;
        if (days < 7) return `${days} days ago`;
        return date.toLocaleDateString();
    }

    return (
        <article className="bg-[#131313] rounded-xl w-10/12 mx-auto shadow-2xl border border-white/5">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                        src={profileImage}
                        alt={username}
                    />
                    <div>
                        <h3 className="text-sm font-bold text-white leading-none">{fullName}</h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">@{username}</p>
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
                    className="max-h-100 w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105 mx-auto"
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
                            <Heart size={24} />
                        </button>
                        <button className="text-white hover:text-[#c799ff] transition-colors">
                            {/* Comment Icon */}
                            <MessageCircle size={24} />
                        </button>
                        <button className="text-white hover:text-[#c799ff] transition-colors">
                            {/* Share Icon */}
                            <Share2 size={24} />
                        </button>
                    </div>
                    <button className="text-white hover:text-[#c799ff] transition-colors">
                        {/* Save Icon */}
                        <Bookmark size={24} />
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
                    <span className="font-bold mr-2">{username}</span>
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