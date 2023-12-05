import { useState } from "react";
import Navbar from "../../component/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Shared/Footer/Footer";


const ShopLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div>
                    
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ShopLayout;