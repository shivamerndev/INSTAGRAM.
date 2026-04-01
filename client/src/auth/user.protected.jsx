import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNav";

const ProtectRoutes = () => {
    
    const { user } = useSelector(state => state.user)

    if (!user) {
        return <Navigate to="/login" />
    }

    return <>
        <SideNavbar />
        <Outlet />
    </>
}
export default ProtectRoutes;