/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SideBarListItem = ({ pathName, name, icon, activePathName }) => {
    return (
        <div>
            <li className="group">
                <Link to={pathName} className={`flex items-center p-2 rounded-lg`}>
                    {icon}
                    <span
                        className={`ml-3 group-hover:text-primary transition-all ${activePathName === `${pathName}`
                                ? "text-primary"
                                : "text-gray-700"
                            } `}
                    >
                        {name}
                    </span>
                </Link>
            </li>
        </div>
    );
};

export default SideBarListItem;