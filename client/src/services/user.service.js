import axiosUtility from '../utils/axios.utility'

const searchUser = async (query) => {
    return await axiosUtility.get(`/user/search?text=${query}`)
}

export { searchUser }