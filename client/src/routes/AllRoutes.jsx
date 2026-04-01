import { createBrowserRouter } from "react-router-dom"
import App from "../app/App"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import SearchPage from "../pages/SearchPage"
import ProtectRoutes from "../auth/user.protected"
import PublicRoute from "../auth/user.public"

const AllRoutes = createBrowserRouter([{
    element: <App />,
    children: [
        {
            path: "*",
            element: <div className="h-screen w-full justify-center flex items-center text-4xl font-semibold"><h1>404 Bad Request</h1></div>
        },
        {
            element: <PublicRoute />,
            children: [
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                }
            ]
        },
        {
            element: <ProtectRoutes />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/create",
                    element: <CreatePost />
                },
                {
                    path: "/search",
                    element: <SearchPage />
                }
            ]
        }

    ]
}])

export default AllRoutes