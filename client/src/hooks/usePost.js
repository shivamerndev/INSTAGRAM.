import { createPost, getPosts } from "../services/post.service"
import { useDispatch } from "react-redux"
import { setPosts } from "../stores/features/post.slice"

const usePost = () => {

    const dispatch = useDispatch()

    const handleCreatePost = async (formData) => {
        return await createPost(formData)
    }

    const handleGetPosts = async () => {
        let res = await getPosts()
        dispatch(setPosts(res.data))
    }

    return { handleCreatePost, handleGetPosts }
}

export default usePost;