const handleError = (func) => async (...args) => {
    try {
        return await func(...args)
    } catch (err) {
        console.log(err.response.data)
        return err.response.data || err.message;
    }
}

export default handleError