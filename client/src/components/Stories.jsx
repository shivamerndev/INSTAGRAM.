import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosUtility from '../utils/axios.utility'
import { setSelectedStory, setStories } from "../stores/features/story.slice"
import { useDispatch, useSelector } from 'react-redux'

const Stories = () => {
    const { user: { fullName, profileImage, username } } = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { stories } = useSelector(state => state.stories)

    const getStories = async () => {
        let res = await axiosUtility.get("/stories/feed")
        dispatch(setStories(res.data))
    }

    useEffect(() => {
        getStories()
    }, [])

    return (
        <div
            id="storybar"
            className="flex  w-full p-4 gap-4 overflow-x-auto pb-4 ">
            {[1, 2, 3].map((users, i) => (
                <div key={i} onClick={() => navigate(`/stories/${username}/`)} className=" cursor-pointer flex flex-col items-center overflow-hidden w-18">
                    <div className="w-16 h-16 rounded-full bg-linear-to-tr from-pink-500 to-yellow-500 p-1">
                        <div className="w-full h-full bg-black  rounded-full flex items-center justify-center overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={profileImage}
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-xs mt-1 justify-self-end ">{username.split('').slice(0, 8)}{username.split('').length > 8 && "..."}</p>
                </div>
            ))}
        </div>
    )
}

export default Stories
