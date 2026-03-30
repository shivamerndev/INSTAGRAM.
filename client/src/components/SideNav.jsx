import { NavLink } from "react-router-dom";
import { NAV_CONFIG } from "../configs/nav.config";

const SideNavbar = () => {

    return (
        <div className=" w-1/5 h-full border-r  select-none transition-all duration-300 border-gray-800 relative ">

            <div className="mb-24">
                <div className=" h-10 w-10/12 absolute -left-6 top-6 ">
                    <i className="bg-[url(https://static.cdninstagram.com/rsrc.php/v4/yB/r/E7m8ZCMOFDS.png)]  scale-60 h-[52px] bg-no-repeat block "></i>
                </div>

                <div className="  absolute left-6 top-10 ">
                    <svg
                        aria-label="Instagram"
                        className="x1lliihq x1n2onr6 x5n08af"
                        fill="white"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <title>Instagram</title>
                        <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                    </svg>
                </div>
            </div>

            {NAV_CONFIG.map(({ svg, title }) => <NavLink className="w-full rounded-md hover:bg-zinc-900  flex items-center px-4 py-1 gap-4 my-4 text-white text-base">
                {svg}
                <h1>{title}</h1>
            </NavLink>)}

            {/*             
                    <div className="h-8 w-full flex  items-center gap-4 my-5 text-white text-lg">
                <svg
                    aria-label="Professional dashboard"
                    fill="white"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <title>Professional dashboard</title>
                    <path d="M8 12a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm8-3a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Zm-4-2a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z"></path>
                    <path d="M18.44 1H5.567a4.565 4.565 0 0 0-4.56 4.56v12.873a4.565 4.565 0 0 0 4.56 4.56H18.44a4.565 4.565 0 0 0 4.56-4.56V5.56A4.565 4.565 0 0 0 18.44 1ZM21 18.433a2.563 2.563 0 0 1-2.56 2.56H5.567a2.563 2.563 0 0 1-2.56-2.56V5.56A2.563 2.563 0 0 1 5.568 3H18.44A2.563 2.563 0 0 1 21 5.56v12.873Z"></path>
                </svg>
                {width === "21%" ? <h1>Dashboard</h1> : null}
            </div>

            <Link
                to={`/${user.username}/`}
                className="h-8 w-full flex  items-center gap-4 my-5 text-white text-lg"
            >
               
                {width === "21%" ? <h1>Profile</h1> : null}
            </Link>

            <div className="h-8 w-full flex mt-8  items-center gap-4 my-5 text-white text-lg">
                <svg
                    aria-label="Settings"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="white"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <title>Settings</title>
                    <line
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="3"
                        x2="21"
                        y1="4"
                        y2="4"
                    >

                    </line>
                    <line
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="3"
                        x2="21"
                        y1="12"
                        y2="12"
                    >

                    </line>
                    <line
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="3"
                        x2="21"
                        y1="20"
                        y2="20"
                    >

                    </line>
                </svg>
                {width === "21%" ? <h1>More</h1> : null}
            </div>  */}

        </div>
    );
};

export default SideNavbar;