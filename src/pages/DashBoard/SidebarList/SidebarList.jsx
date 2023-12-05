import {  useLocation } from "react-router-dom";
import SideBarListItem from "./SideBarListItem/SideBarListItem";
import { MdEventRepeat } from "react-icons/md";
import { FaBloggerB} from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";


const SidebarList = () => {
    const activePathName = useLocation().pathname;
    return (
        <div>
            <ul className="space-y-2 font-medium">
                <SideBarListItem
                    name={"Dashboard"}
                    pathName={"/dashboard"}
                    activePathName={activePathName}
                    icon={
                        <svg
                            aria-hidden="true"
                            className={`w-6 h-6 ${activePathName === "/dashboard"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                    }
                />
                <SideBarListItem
                    name={"Add Product"}
                    pathName={"/dashboard/add-product"}
                    activePathName={activePathName}
                    icon={
                        <FaBloggerB
                            className={`w-6 h-6 ${activePathName === "/dashboard/add-product"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                        />
                    }
                />
                <SideBarListItem
                    name={"Add Blog"}
                    pathName={"/dashboard/add-blog"}
                    activePathName={activePathName}
                    icon={
                        <svg
                            aria-hidden="true"
                            className={`w-6 h-6 ${activePathName === "/dashboard/add-blog"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                    }
                />
                {/* <SideBarListItem
                    name={"All Events"}
                    pathName={"/dashboard/all-events"}
                    activePathName={activePathName}
                    icon={
                        <MdEventRepeat
                            className={`w-6 h-6 ${activePathName === "/dashboard/all-events"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                        />
                    }
                />
                <SideBarListItem
                    name={"Add Event"}
                    pathName={"/dashboard/add-event"}
                    activePathName={activePathName}
                    icon={
                        <svg
                            aria-hidden="true"
                            className={`w-6 h-6 ${activePathName === "/dashboard/add-event"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                    }
                /> */}

             
                <SideBarListItem
                    name={"All Users"}
                    pathName={"/dashboard/all-users"}
                    activePathName={activePathName}
                    icon={
                        <AiOutlineUsergroupAdd
                            className={`w-6 h-6 ${activePathName === "/dashboard/all-users"
                                    ? "text-primary"
                                    : "text-primary"
                                }  transition duration-75  group-hover:text-primary`}
                        />
                    }
                />
            </ul>
        </div>
    );
};

export default SidebarList;