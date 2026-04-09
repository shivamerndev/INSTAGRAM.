import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, ChevronLeft, ChevronRight, StickerIcon, UserCircle } from "lucide-react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaHeart } from "react-icons/fa";

const PostCard = ({ post }) => {
    console.log("post")
    const [mediaIndex, setMediaIndex] = useState(0);

    const { user: { profileImage, username, fullName }, caption, media, likeCount, commentNumber, createdAt } = post;

    function getTimeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);

        const seconds = Math.floor((now - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return `${seconds}s ago`;
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    }

    let isLiked = true
    let p = {}

    return (
        <div className="mt-1 w-[68%] max-h-screen bg-black rounded-lg overflow-hiden  ">
            {/* Username */}
            <div className="py-3 flex  items-center justify-between">
                <div className="flex gap-2  items-center">
                    <div onClick={() => navigate(`/stories/${username}/`)} className="w-9 h-9  rounded-full bg-linear-to-tr from-pink-500 to-yellow-500 p-px">
                        <div className="w-full cursor-pointer  overflow-hidden  h-full bg-black rounded-full flex items-center justify-center">
                            <img
                                className="object-contain h-full w-full"
                                src={profileImage}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="font-semibold">
                        <span onClick={() => navigate(`/${username}/`)} className="cursor-pointer text-sm">{username}</span>  •
                        <span className="text-xs text-gray-400">
                            {" "}{getTimeAgo(createdAt)}
                        </span>
                    </div>
                </div>
                <button onClick={() => {
                    setGotopost(post._id)
                    setOpt(true)
                }}
                    className="text-xl cursor-pointer font-semibold"  >
                    ⋯
                </button>
            </div>
            {/* main Image */}
            <div className="w-full max-h-screen overflow-hidden bg-gray-700">
                <img
                    className="max-h-[560px] w-full object-cover transition duration-700 hover:scale-[1.02]"
                    src={media[mediaIndex].url}
                />
            </div>
            <div className="bg--500 mt-3 h-1/2 w-full">
                <div className="text-white h-1/2  text-sm">
                    {/* Action Icons */}
                    {<>
                        <div className="flex justify-between items-center gap-8 text-xl mb-1">
                            <div className="flex gap-5 items-center">
                                {isLiked[p?._id] || p.likes?.includes(user._id) ? <FaHeart onClick={() => {
                                    like(p._id)
                                }}
                                    className="fill-red-500 cursor-pointer transition-opacity text-2xl" /> : <FaRegHeart
                                    onClick={() => {
                                        like(p._id)
                                    }}
                                    className={`cursor-pointer transition-opacity text-2xl`} />
                                }
                                <svg onClick={() => {
                                    navigate(`/p/${p._id}/`) // last opt useeffect if pop false [] pcard
                                    setpop(p)
                                }} aria-label="Comment" className="cursor-pointer" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                <FaRegPaperPlane className="cursor-pointer text-2xl" />
                                {/* <FiShare2 /> */}
                            </div>
                            {true || user?.bookmark?.includes(p._id) ? <i onClick={() => {
                                savep(p._id)
                                setSave(false)
                            }} className=" cursor-pointer ri-bookmark-fill text-2xl"></i> :
                                <i onClick={() => {
                                    savep(p._id)
                                    setSave(true)
                                }} className=" cursor-pointer ri-bookmark-line text-2xl"></i>
                            }
                        </div>
                        <p className="text-sm font-semibold mb-1">
                            {p?.likes?.length} likes
                        </p>
                        <p className="text-gray-400 mb-1 -mt-1 text-sm">{(getTimeAgo(post?.createdAt)).split('')[1] === 'h' ? (getTimeAgo(post?.createdAt)).split('')[0] + ' hours' : (getTimeAgo(post?.createdAt)).split('')[0] + " day"}  ago</p>
                    </>}
                </div>
            </div>
            {/* Caption */}
            <div>
                <div className="mb-1">
                    <span className="font-bold">{username}</span>
                    <span> {p?.caption}</span>
                    <button className="text-gray-400 ml-1 text-xs cursor-pointer">more</button>
                </div>
                <button className="text-gray-400 text-xs mb-1">See translation</button>
                {p?.comments?.length !== 0 && <p onClick={() => {
                    navigate(`/post/${post._id}/`)
                    setpop(post)
                }} className="text-gray-400 text-sm cursor-pointer ">
                    View all {p?.comments?.length} comments
                </p>}
            </div>


            <form className="flex w-full items-center">
                <div className="bg-red-500 w-8 h-8 shrink-0 overflow-hidden rounded-full">
                    <img
                        className="w-full h-full object-cover"
                        src={profileImage}
                        alt=""
                    />
                </div>
                <div className=" w-full px-3">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="bg-transparent w-full text-md py-2 placeholder-gray-500 outline-none"
                    />
                </div>
                <button type="submit" className="text-blue-400 font-semibold mr-1">Post</button> <UserCircle className="text-pink-500" />

                {false && <div className="absolute right-4 top-10 z-10 bg-zinc-800 p-2 rounded shadow">
                    <span className="cursor-pointer text-2xl " onClick={() => setText((prev) => (prev || "") + "😀")}>😀</span>
                    <span className="cursor-pointer text-2xl " onClick={() => setText((prev) => (prev || "") + "😂")}>😂</span>
                    <span className="cursor-pointer text-2xl " onClick={() => setText((prev) => (prev || "") + "😍")}>😍</span>
                </div>}

            </form>

        </div>
    );
};

export default PostCard;