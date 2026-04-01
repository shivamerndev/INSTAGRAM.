import usePost from '../hooks/usePost';
import handleForm from '../utils/form.utility';

const CreatePost = () => {

    const {handleCreatePost} = usePost()

    return (
        <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-[#242830] to-[#232427]">
            <form onSubmit={(e)=>handleForm(e,handleCreatePost)} className="bg-black rounded-2xl shadow-lg p-10 flex flex-col gap-5">
                <label htmlFor="files" className="font-semibold  text-lg mb-2 text-center">
                    Drag or Select files
                </label>
                <input
                    id="files"
                    type="file"
                    name='media'
                    multiple
                    className="border border-gray-300 rounded-lg p-2  text-base file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-pink-500 file:to-purple-500 file:text-white file:font-semibold hover:file:opacity-90"
                />
                <input
                    type="text"
                    name='caption'
                    placeholder="Caption"
                    className="border border-gray-300 rounded-lg p-3  text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#fd5949] to-[#d6249f] text-white rounded-lg p-3 font-semibold text-base cursor-pointer shadow-md transition hover:opacity-90"
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost