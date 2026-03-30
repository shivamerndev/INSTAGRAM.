const createPost = (req, res) => {
    const files = req.files;
    console.log(files)
    res.send(files)
}

export { createPost }