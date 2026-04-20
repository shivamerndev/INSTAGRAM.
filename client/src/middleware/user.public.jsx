import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {

    const  user  = useSelector(state => state.auth.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate("/",{ replace: true })
    }, [user])

    return <Outlet />
}
export default PublicRoute;