import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div className='h-screen w-full bg-black text-white'>
            <nav>Navbar</nav>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}

export default App