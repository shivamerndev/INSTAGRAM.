import postModel from "../models/post.model.js"

const createPostService = async (data) => {

    const post = await postModel.create(data)
    return post;
}
 
const getPostService = async () => {
    const posts = await postModel.find().populate("user")
    return posts;
}
export { createPostService, getPostService }