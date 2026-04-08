import { useState } from 'react'
import { followUser, notification } from '../services/user.service'

const useFollow = () => {

    const [requests, setResults] = useState([])

    const handleFollowUser = async (followee) => {
        let res = await followUser({ followee })
        console.log(res.data)
    }

    const handleNotification = async () => {
        let res = await notification()
        setResults(res.data.requests)
    }

    return { handleFollowUser, handleNotification, requests }
}

export default useFollow