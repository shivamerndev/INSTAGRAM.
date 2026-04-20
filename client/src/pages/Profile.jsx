import { useSelector } from "react-redux"
import useAuth from '../hooks/userAuth'
import { useEffect } from "react"
import usePost from "../hooks/usePost"
import { Link, useParams } from "react-router-dom"
import useUser from "../hooks/useUser"
import { mediaArr } from "../configs/profile.config"

const Profile = () => {

    const { username: id } = useParams()
    const posts = useSelector(state => state.posts.posts)
    const profile = useSelector(store => store.user.profile)
    const { handleGetPosts } = usePost()
    const { handleLogout } = useAuth()
    const { getUserProfile } = useUser()

    useEffect(() => {
        if (!posts.length) handleGetPosts()
        getUserProfile(id)
    }, [id])

    if (!profile) return <h1>Loading...</h1>

    let { profileImage, username, fullName, bio } = profile

    return (<div className="w-full px-24">

        {/* <FollowingLists arr={followers} h1="followers" />
                <FollowingLists arr={following} h1="following" /> */}


        <div className="p-8 w-full border-b border-gray-700 ">

            <div className="flex gap-24">
                <div
                    onClick={() => setPic(true)}
                    className="w-36 h-36 rounded-full  overflow-hidden">
                    <input
                        type="file"
                        id='filedata'
                        className="hidden" />

                    <label htmlFor="filedata">
                        <img className="w-full h-full object-cover" src={profileImage} alt="" />
                    </label>
                </div>
                <div className=" w-1/2 text-white">
                    <div className="flex items-center gap-10  text-white ">
                        <h1 className="text-xl">{username}</h1>
                        <Link
                            to={"/profile/edit"}
                            className="bg-zinc-700 text-white font-semibold px-2 py-1 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Edit Profile
                        </Link>
                        <div onClick={() => setLogoutpanel(true)} className="ml-16 ">
                            <svg
                                aria-label="Options"
                                className="x1lliihq x1n2onr6 x5n08af"
                                fill="white"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Options</title>
                                <circle
                                    cx="12"
                                    cy="12"
                                    fill="none"
                                    r="8.635"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></circle>
                                <path
                                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                    fill="none"
                                    stroke="white"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex mt-6 gap-16 items-center ">
                        <h1>{posts.length} posts</h1>
                        <Link to={`/${username}/followers/`}>
                            100 followers
                        </Link>
                        <Link to={`/${username}/following/`}>
                            120 following
                        </Link>
                    </div>
                    <div className="mt-10 leading-5">
                        <h1>{bio}</h1>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="bg-gray-900 mt-8 w-24 h-24 rounded-full text-center text-xs content-center text-white uppercase">
                    Highlights
                </div>
            </div>

        </div>

        <div className="uppercase text-white flex justify-center gap-12 text-xs font-semibold">
            {mediaArr.map((m, i) => (
                <div key={i} className={`flex  items-center justify-center py-4 gap-1 ${m.isbt ? 'border-t' : null} border-t-white`}>
                    {m.svg}
                    {m.text === 'posts' ? <Link to={`/${username}/`} >{m.text}</Link> : <Link to={`/${username}/${m.text}/`} >{m.text}</Link>}
                </div>
            ))}
        </div>

        <div className="mt-8 grid grid-cols-4 gap-1  ">

            {posts.map((p, i) => <div key={i} className="w-55 cursor-pointer my-1 h-80 bg-blue-500"  >
                <img src={p.media[0].url} alt="post" className="w-full h-full object-cover" />
            </div>)}

            {/* <PostPopup setPcard={setPcard} setIdx={setCurrentIdx} idx={currentIdx} arr={posts} /> */}

        </div>

    </div>
    )
}

export default Profile
