import { useState } from 'react'
import { useSelector } from 'react-redux'


const StoryPage = () => {

  const storyData = useSelector(state=>state.stories.stories)
  // Example user and story data (replace with selector/props as needed)
  const user = storyData.userId
  // const storyData = [
  //   {
  //     _id: "69ce1991dadeb9239e2f91f4",
  //     userId: user._id,
  //     media: [
  //       {
  //         url: "https://ik.imagekit.io/shivamerndev/Js_battle_ZlAQ6uzmSa.png",
  //         mediaType: "image",
  //         _id: "69ce1991dadeb9239e2f91f5"
  //       },
  //       {
  //         url: "https://ik.imagekit.io/shivamerndev/profile_ooPBHmvPu.jpeg",
  //         mediaType: "image",
  //         _id: "69ce1991dadeb9239e2f91f6"
  //       },
  //       {
  //         url: "https://ik.imagekit.io/shivamerndev/wp3366737-how-to-open-wallpaper-images_zBFXCf9CJo.png",
  //         mediaType: "image",
  //         _id: "69ce1991dadeb9239e2f91f7"
  //       }
  //     ],
  //     likes: [],
  //     views: [],
  //     expiresAt: "2026-04-03T07:24:01.918Z",
  //     createdAt: "2026-04-02T07:24:01.938Z",
  //     updatedAt: "2026-04-02T07:24:01.938Z",
  //     __v: 0
  //   }
  // ]

  const [current, setCurrent] = useState(0)
  const story = storyData[0]
  const media = story.media

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }
  const handleNext = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="relative flex flex-col items-center w-[350px] h-[640px] bg-[#18181c] rounded-xl shadow-lg overflow-hidden">
        {/* User Info */}
        <div className="flex items-center gap-3 w-full px-4 py-3 bg-black/30 absolute top-0 left-0 z-20">
          <img
            src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}`}
            alt={user.fullName}
            className="w-10 h-10 rounded-full border-2 border-[#c799ff] object-cover bg-[#23232a]"
          />
          <div className="flex flex-col">
            <span className="text-white font-semibold leading-5">{user.fullName}</span>
            <span className="text-xs text-gray-300">@{user.username}</span>
          </div>
        </div>
        {/* Story Media */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
          aria-label="Previous"
        >
          &#8592;
        </button>
        {media[current].mediaType === 'image' && (
          <img
            src={media[current].url}
            alt="story"
            className="object-contain w-full h-full"
            style={{ marginTop: 40, marginBottom: 24 }}
          />
        )}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
          aria-label="Next"
        >
          &#8594;
        </button>
        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {media.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-[#c799ff]' : 'bg-gray-500/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoryPage