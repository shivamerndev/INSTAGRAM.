const handleError =(func)=>(...arg)=>{
    try {
        return func(...arg)
    } catch (err) {
        return err;
    }
}

export default handleError