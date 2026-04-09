import { useState } from 'react'
import { followUser, notification } from '../services/user.service'
import { useDispatch, useSelector } from 'react-redux'
import { setFollowBtn } from '../stores/features/follow.slice'

const useFollow = () => {

    const dispatch = useDispatch()
    const { followBtn } = useSelector(state => state.follows)

    const [requests, setResults] = useState([])

    const handleFollowUser = async (followee) => {
        let res = await followUser({ followee })
        if (res.status === 200) {
            dispatch(setFollowBtn(true))
        }
        return res
    }

    const handleNotification = async () => {
        let res = await notification()
        setResults(res.data.requests)
    }

    return { handleFollowUser, handleNotification, requests,followBtn }
}

export default useFollow