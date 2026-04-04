import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosUtility from '../utils/axios.utility'
import { setStories } from "../stores/features/story.slice"
import { useDispatch, useSelector } from 'react-redux'


const Stories = () => {

    const { user: { profileImage } } = useSelector(state => state.user)
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
        <section className="flex gap-4 shrink-0 pb-2 overflow-x-auto  " style={{ scrollbarWidth: 'none' }}>
            {/* My Story */}
            <div className=" items-center gap-2 shrink-0 cursor-pointer">
                <div className=" rounded-full border-2 border-dashed border-neutral-600 relative">
                    <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={profileImage}
                        alt="My Story"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#c799ff] text-black rounded-full p-0 border-2 border-[#0e0e0e] w-5 h-5 flex items-center justify-center">
                        <span className="text-sm font-bold leading-none">+</span>
                    </div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">My Story</span>
            </div>

            {/* Other Stories */}
            {stories.map((story, i) => {
                console.log(story)
                return (
                    <div onClick={() => navigate("/story")} key={i} className="flex w-20 h-20  flex-col items-center gap-2 shrink-0 cursor-pointer">
                        <div className="rounded-full p-1 bg-linear-to-tr from-[#c799ff] via-[#ff96bb] to-[#c799ff]">
                            <img
                                className=" rounded-full object-cover border-2 border-[#0e0e0e]"
                                src={story.userId.profileImage || "https://ik.imagekit.io/shivamerndev/396854_qgne_HtVa.webp"}
                                alt={""}
                            />
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium tracking-tight">{story.name}</span>
                    </div>
                )
            })}
        </section>
    )
}

export default Stories