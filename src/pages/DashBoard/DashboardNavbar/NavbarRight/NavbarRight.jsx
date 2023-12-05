import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";


const NavbarRight = () => {
    return (
        <div className="flex items-center">
            {/* Notifications */}
            <Notifications />

            {/* Profile */}
            <Profile />
        </div>
    );
};

export default NavbarRight;