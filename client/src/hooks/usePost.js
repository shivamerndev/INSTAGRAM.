import { createPost, getPosts } from "../services/post.service"

const usePost = () => {

    const handleCreatePost = async (formData) => {
        console.log(formData)
        // return await createPost(formData)
    }

    const handleGetPosts = async () => {
        let res = await getPosts()
        console.log(res)
        // state manage here and return posts
    }

    return { handleCreatePost, handleGetPosts }
}

export default usePost;