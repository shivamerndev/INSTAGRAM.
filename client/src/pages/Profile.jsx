

const Profile = () => {


    return (
        <section className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 flex flex-col gap-10">
            {/* Profile Header */}
            <div className="flex flex-row items-center gap-12">
                <figure className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                    <img src="https://ui-avatars.com/api/?name=U+N&background=0D8ABC&color=fff" alt="profile" className="w-full h-full object-cover" />
                </figure>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Username</h1>
                        <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors duration-200">Follow</button>
                        {/* <button className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold">Edit Profile</button> */}
                    </div>
                    <div className="flex gap-8 mt-2">
                        <span className="text-base text-gray-700 dark:text-gray-200"><b>200</b> posts</span>
                        <span className="text-base text-gray-700 dark:text-gray-200 cursor-pointer hover:underline"><b>2,000</b> followers</span>
                        <span className="text-base text-gray-700 dark:text-gray-200 cursor-pointer hover:underline"><b>284</b> following</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg">Bio goes here. This is a sample user bio for the Instagram clone profile page. You can edit your bio in settings.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-12 border-b border-gray-200 dark:border-gray-700 mb-6">
                <button className="py-2 px-6 text-lg font-semibold text-blue-600 border-b-2 border-blue-600 focus:outline-none transition-colors duration-200">Posts</button>
                <button className="py-2 px-6 text-lg font-semibold text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-400 focus:outline-none transition-colors duration-200">Reels</button>
                <button className="py-2 px-6 text-lg font-semibold text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-400 focus:outline-none transition-colors duration-200">Archives</button>
            </div>
            {/* Post Grid */}
            <div id="postCards" className="grid grid-cols-3 gap-4 min-h-[300px]">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-4xl font-bold border border-gray-100 dark:border-gray-800">+</div>
                {/* Map user posts here as <PostCard /> */}
            </div>
        </section>
    )
}

export default Profile