import { Outlet } from 'react-router-dom'
import userAuth from '../hooks/userAuth'
import { useEffect } from 'react'

const App = () => {

    const { handleGetMe } = userAuth()

    useEffect(() => {
        handleGetMe()
    }, [])

    return (
        <div className='min-h-screen w-full bg-black text-slate-50 antialiased'>
            <Outlet />
        </div>
    )
}

export default App
