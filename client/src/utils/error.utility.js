const handleError = (func) => async (...args) => {
    try {
        return await func(...args)
    } catch (err) {
        return err.response || err.message;
    }
}

export default handleError