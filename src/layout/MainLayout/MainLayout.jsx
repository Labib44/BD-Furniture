import { Outlet } from "react-router-dom";
import Footer from "../../component/Shared/Footer/Footer";
import Navbar from "../../component/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;