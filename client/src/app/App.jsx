import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <>
            <nav>Navbar</nav>
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}

export default App