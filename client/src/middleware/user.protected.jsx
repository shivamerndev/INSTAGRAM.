import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNav";
import Loading from "../utils/Loading";
const ProtectRoutes = () => {

    const loading = useSelector(state => state.auth.loading)

    if (loading) return <Loading />

    return (
        <div className="min-h-screen w-full flex">
            <SideNavbar />
            <div className="flex-1 ml-16">
                <Outlet />
            </div>
        </div>
    )
}
export default ProtectRoutes;