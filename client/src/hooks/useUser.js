import { useState } from 'react'
import { searchUser, userProfile } from '../services/user.service'
import { useDispatch } from 'react-redux'
import { setProfile } from '../stores/features/user.slice'

const useUser = () => {

  const [results, setResults] = useState([])
  const dispatch = useDispatch()

  const handleSearchUser = async (text) => {
    let res = await searchUser(text)
    setResults(res.data.users)
  }

  const getUserProfile = async (username) => {
    let res = await userProfile(username)
    dispatch(setProfile(res.data.user))
  }

  return { handleSearchUser, results, getUserProfile }
}

export default useUser