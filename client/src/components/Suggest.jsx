import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Suggest = () => {

    const  user  = useSelector(state => state.auth.user)

    let suggestUser = [{ username: "lund" }, { username: "lund" }]
    let followStates = {}

    return <div className="w-[30%] mt-6 p-4 hidden md:block">
        <div className="flex justify-between items-center mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                    className="object-cover h-full w-full"
                    src={user.profileImage}
                    alt=""
                />
            </div>
            <div>
                <p className="text-md font-semibold">{user.username}</p>
                <p className="text-sm text-gray-500">motivational memes..</p>
            </div>
            <button className="text-sky-500 text-sm font-semibold">
                Switch
            </button>
        </div>
        <h3 className="font-semibold text-gray-400 mb-4">
            Suggested for you{" "}
            <span className="capitalize ml-28 text-sm text-white font-semibold">
                see all
            </span>
        </h3>

        {[1, 2, 3].map((users, i) => (
            <div key={i} className="flex  justify-between items-center mb-3">
                <Link to={`/${user.username}/`} className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        className="object-cover h-full w-full"
                        src={user.profilepicture}
                        alt=""
                    />
                </Link>
                <div>
                    <Link to={`/${user.username}/`} className="text-md font-semibold">{user.username}</Link>
                    <p className="text-sm text-gray-500">Suggested for you</p>
                </div>
                <button
                    onClick={() => {
                        followStates[user._id]
                            ? unfollowUser(user._id)
                            : followUser(user._id);
                    }}
                    className={`${followStates[user._id] ? 'text-white' : 'text-sky-500'}  mx-2 cursor-pointer text-md font-semibold`}
                >
                    {followStates[user._id] ? "following" : "Follow"}
                </button>
            </div>
        ))}
    </div>
}

export default Suggest
