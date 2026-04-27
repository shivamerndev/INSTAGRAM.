import { NavLink } from "react-router-dom";
import { NAV_CONFIG } from "../configs/nav.config";
import { useState } from "react";
import { useSelector } from "react-redux"


const SideNavbar = () => {

    const [hover, setHover] = useState(false)
    const user = useSelector(state => state.auth.user)

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={" h-full   select-none   fixed bg-black top-0 " + (hover && "w-50")}>

            <div className=" px-4 mb-16 py-8">
                <svg
                    aria-label="Instagram"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="white"
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                    width="30"
                >
                    <title>Instagram</title>
                    <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                </svg>
            </div>

            {NAV_CONFIG.map(({ svg, title }) => <NavLink key={title} to={title === "home" ? "/" : title} className={(e) => e.isActive ? "  w-full rounded-md hover:bg-zinc-900  flex items-center px-4 py-1 gap-4 text-white text-base" : "w-full rounded-md hover:bg-zinc-900  flex items-center px-4 py-2 gap-4 my-4 text-white text-base"}>
                {svg}
                {hover && <h1 className="capitalize transition-all duration-300 text-base">{title}</h1>}
            </NavLink>)
            }


            <NavLink to={"/" + user.username} className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-zinc-900 cursor-pointer group w-fit">
                <figure className="h-8 w-8 rounded-full overflow-hidden border-2 border-[#c799ff] bg-[#23232a] shadow">
                    <img
                        className="object-cover h-full w-full"
                        src={user.profileImage}
                        alt="profile"
                    />
                </figure>
                {hover && <h1 className="capitalize text-base text-white font-semibold group-hover:text-[#c799ff] transition-colors duration-200">{user.username}</h1>}
            </NavLink>



        </div >
    );
};
export default SideNavbar;