import { Outlet } from 'react-router-dom'
import userAuth from '../hooks/userAuth'
import { useEffect } from 'react'

const App = () => {

    const { handleGetMe } = userAuth()

    useEffect(() => {
        handleGetMe()
    }, [])

    return (
        <div className='h-screen flex w-full bg-black text-white'>
            <Outlet />
        </div>
    )
}

export default App