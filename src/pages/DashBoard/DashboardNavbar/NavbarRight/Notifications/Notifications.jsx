import { Link } from "react-router-dom";
import Notification from "./Notification/Notification";
import { useState } from "react";


const Notifications = () => {
    const [openNotification, setOpenNotification] = useState(false);
    return (
        <div>
            <button
                type="button"
                className={`p-3 rounded-full ${openNotification
                        ? "drop-shadow-2xl text-primary"
                        : "text-gray-800"
                    } hover:text-primary drop-shadow-lg bg-white hover:drop-shadow-2xl transition-all relative mr-3`}
                onClick={() => setOpenNotification(!openNotification)}
            >
                <span className="sr-only">View notifications</span>

                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
            </button>

            {openNotification && (
                <div
                    onClick={() => setOpenNotification(!openNotification)}
                    className="z-50 absolute right-1 top-[80%] max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg "
                >
                    <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 ">
                        Notifications
                    </div>
                    <div>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>
                    <Link
                        to="#"
                        className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 hover:text-primary transition-all"
                    >
                        <div className="inline-flex items-center ">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            View all
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Notifications;