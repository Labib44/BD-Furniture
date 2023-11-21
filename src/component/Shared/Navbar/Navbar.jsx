import { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../../../assets/navbar/navbar.png"


const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    // const [fix, setFix] = useState(false);

    let content;


    // function setFixed() {
    //     if (window.scrollY >= 1) {
    //         setFix(true)

    //     }
    //     else {
    //         setFix(false)
    //     }
    // }
    // window.addEventListener("scroll", setFixed)


    const menuItem = <>
        <li className="flex"><Link to="/" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>HOME</Link></li>
        <li className="flex"> <Link to="about" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>SHOP</Link></li>
        <li className="flex"> <Link to="service" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>CHAIRS</Link></li>
        <li className="flex"> <Link to="works" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>SOFA</Link></li>
        <li className="flex"> <Link to="pricing" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>ABOUT US</Link></li>
        <li className="flex"> <Link to="blog" className='flex items-center text-xl  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>BLOG</Link></li>

    </>
    return (
        <div className="p-5">
            <header className="">
                <div className=" flex justify-between h-20 mx-44 lg:mx-0 md:mx-0 sm:mx-0 ">
                    <Link to={"/"}  >
                        <div className="">
                            <img src={navbar} className="py-5 h-[80px]" alt="logo" />
                        </div>
                    </Link>

                    <div className="md:hidden sm:hidden">
                        <ul className="items-stretch flex gap-3 text-gray-800 cursor-pointer">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 md:hidden sm:hidden">
                        {/* <button className="self-center px-6 py-3 bg-[#1C2F50] text-white font-semibold rounded-full">Login</button> */}
                    </div>
                    <div className="hidden md:block sm:block">
                        <button className="p-4 hidden lg:block md:block sm:block"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {isMobileMenu && (
                            <ul className="absolute z-50 left-0 p-2 pb-5 shadow bg-base-100 w-full">
                                {menuItem}
                                <button className="self-center px-5 py-2 mt-5 bg-[#1C2F50] text-white font-semibold rounded-full ">Login</button>
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;