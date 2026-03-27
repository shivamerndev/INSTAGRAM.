import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div className='h-screen w-full bg-black text-white'>
            <Outlet />
        </div>
    )
}

export default App