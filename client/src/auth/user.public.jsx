import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import userAuth from "../hooks/userAuth";

const PublicRoute = () => {

    const { user } = useSelector(state => state.user)

    if (user) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
export default PublicRoute;