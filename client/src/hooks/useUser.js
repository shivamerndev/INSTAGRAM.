import { useState } from 'react'
import { searchUser } from '../services/user.service'

const useUser = () => {

  const [results, setResults] = useState([])

    const handleSearchUser = async (text) => {
        let res = await searchUser(text)
        setResults(res.data.users)
    }


    return { handleSearchUser, results }
}

export default useUser