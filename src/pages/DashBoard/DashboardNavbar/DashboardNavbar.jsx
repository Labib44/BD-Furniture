/* eslint-disable react/prop-types */
import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarRight from "./NavbarRight/NavbarRight";


const DashboardNavbar = ({ openSidebar, setOpenSidebar }) => {
    return (
        <nav className="w-full fixed top-0 z-50 bg-white border-b border-gray-300 ">
            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Navbar Left */}
                    <NavbarLeft
                        openSidebar={openSidebar}
                        setOpenSidebar={setOpenSidebar}
                    />

                    {/* Navbar Right */}
                    <NavbarRight />
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;