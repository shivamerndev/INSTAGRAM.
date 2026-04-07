import { useState } from 'react'
import { followUser, searchUser } from '../services/user.service'

const useUser = () => {

  const [results, setResults] = useState([])

  const handleSearchUser = async (text) => {
    let res = await searchUser(text)
    setResults(res.data.users)
  }

  const handleFollowUser = async (followee) => {
    let res = await followUser({ followee })
    console.log(res)
  }


  return { handleSearchUser, results, handleFollowUser }
}

export default useUser