import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardNavbar from "../../pages/DashBoard/DashboardNavbar/DashboardNavbar";
import SidebarList from "../../pages/DashBoard/SidebarList/SidebarList";


const DashBoardLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(true);
    return (
        <div>
            {/* Dashboard Layout */}
            <DashboardNavbar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />

            {/* Dashboard Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-all bg-white border-r border-gray-300 lg:translate-x-0 ${openSidebar
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <SidebarList />
                </div>
            </aside>

            {/* Dashboard Content */}
            <div className="lg:ml-72 ml-3  pt-28 lg:pr-6 pr-3 pb-12">
                <Outlet />
            </div>
        </div>

    );
};

export default DashBoardLayout;