import getMediaUrl from "../config/imagekit.config.js";
import { createPostService, getPostService } from "../services/post.service.js";

const createPost = async (req, res) => {
    const { caption } = req.body
    const { id } = req.userId
    const files = req.files;
    const urls = await Promise.all(files.map(file => getMediaUrl(file)))
    let postData = await createPostService({ caption, media: urls, user: id })
    res.send(postData)
}

const getPost = async (req, res) => {
    const posts = await getPostService()
    res.send(posts)
}

export { createPost, getPost }