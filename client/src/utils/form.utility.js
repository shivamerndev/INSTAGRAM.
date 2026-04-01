const handleForm = (e, cb) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    if (formData.get("media") instanceof File) return cb(formData)
    let obj = Object.fromEntries(formData)
    cb(obj)
}

export default handleForm;