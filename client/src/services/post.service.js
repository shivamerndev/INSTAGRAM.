import axiosUtility from "../utils/axios.utility"
import handleError from "../utils/error.utility"

const createPost = handleError(async (data) => {
    return await axiosUtility.post("/posts/create", data)
})

const getPosts = handleError(async () => {
    return await axiosUtility.get("/posts")
})


export { createPost, getPosts }