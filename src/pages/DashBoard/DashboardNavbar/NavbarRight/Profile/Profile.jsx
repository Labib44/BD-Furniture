import { useState } from "react";
import { Link } from "react-router-dom";
import labib from "../../../../../assets/labib.png"

const Profile = () => {
    const [openProfile, setOpenProfile] = useState(false);
    return (
        <div className="flex items-center">
            <div>
                <button
                    type="button"
                    className={`w-[46px] h-[46px] flex border-4 rounded-full ${
                        openProfile
                            ? "drop-shadow-2xl  border-primary"
                            : "text-gray-800"
                    } hover:border-primary drop-shadow-lg bg-white hover:drop-shadow-2xl transition-all relative`}
                    onClick={() => setOpenProfile(!openProfile)}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-full h-full rounded-full"
                        src={labib}
                        alt="user photo"
                    />
                </button>
            </div>
            {openProfile && (
                <div className="z-50 absolute right-1 top-[80%] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow ">
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900 " role="none">
                            Labibur Rahman
                        </p>
                        <p
                            className="text-sm font-medium text-gray-900 truncate "
                            role="none"
                        >
                           labibur@rahman.com
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                                role="menuitem"
                            >
                                Earnings
                            </Link>
                        </li>
                        <li>
                            <span
                                // onClick={handleLogOut}
                                className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Sign out
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;