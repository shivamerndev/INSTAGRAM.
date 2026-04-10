import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNav";
import Loading from "../utils/Loading";
const ProtectRoutes = () => {

    const { loading } = useSelector(state => state.user)

    if (loading) return <Loading />

    return (
        <div className="min-h-screen w-full flex">
            <SideNavbar />
            <div className="flex-1 ml-12 px-4 pb-6 pt-4 sm:px-6 lg:px-8 lg:py-8">
                <Outlet />
            </div>
        </div>
    )
}
export default ProtectRoutes;