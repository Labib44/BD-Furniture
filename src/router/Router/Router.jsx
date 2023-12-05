import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import DashBoardLayout from "../../layout/DashBoardLayout/DashBoardLayout";
import AddProduct from "../../../src/pages/DashBoard/AddProduct/AddProduct";
import DashBoard from "../../pages/DashBoard/DashBoard";
import ShopLayout from "../../layout/ShopLayout/ShopLayout";
import AllProducts from "../../pages/Shop/AllProducts/AllProducts";
import AddProducttttttt from "../../pages/DashBoard/AddProduct/AddProducttttttt";


const routers = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/shop', element:<Shop></Shop>}
        ]
    },
    {
        path:'/shop', element:<ShopLayout></ShopLayout>,
        children:[
            {path:'/shop', element:<Shop></Shop>},
            {path:'/shop', element:<AllProducts></AllProducts>},
        ]
    },
    {
        path: '/dashboard', element: <DashBoardLayout></DashBoardLayout>,
        children: [
            
            { path: '/dashboard', element:<DashBoard></DashBoard>},
            // { path: '/dashboard/add-product', element:<AddProduct></AddProduct>},
            { path: '/dashboard/add-product', element:<AddProducttttttt></AddProducttttttt>},
        ]
    },
    
])

export default routers;