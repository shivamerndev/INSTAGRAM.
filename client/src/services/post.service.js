import axiosUtility from "../utils/axios.utility"

const createPost = async (data)=>{
   return await axiosUtility.post("/posts/create",data)
}

const getPosts = async ()=>{
    return await axiosUtility.get("/posts")
}


export { createPost, getPosts }