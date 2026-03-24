import { createBrowserRouter } from "react-router-dom"
import App from "../app/App"
import Register from "../pages/Register"

const AllRoutes = createBrowserRouter([{
    element: <App />,
    children: [
        {
            path: "/",
            element: <Register />
        },
        {
            path: "/login",
            element: <Register />
        }
    ]
}])

export default AllRoutes