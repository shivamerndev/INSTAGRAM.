import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/SideNav';

const App = () => {
    return (
        <div className='h-screen flex w-full bg-black text-white'>
            <SideNavbar />
            <Outlet />
        </div>
    )
}

export default App