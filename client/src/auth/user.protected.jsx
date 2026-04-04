import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNav";
import Loading from "../utils/Loading";

const ProtectRoutes = () => {

    const { loading } = useSelector(state => state.user)

    if (loading) return <Loading/>

    return <>
        <SideNavbar />
        <Outlet />
    </>
}
export default ProtectRoutes;