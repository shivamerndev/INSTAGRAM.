import { createBrowserRouter } from "react-router-dom"
import App from "../app/App"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"

const AllRoutes = createBrowserRouter([{
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }
    ]
}])

export default AllRoutes