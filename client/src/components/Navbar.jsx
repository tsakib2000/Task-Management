import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext);
    return (
        <div className="flex md:justify-between">
        <div className="text-xl font-bold text-gray-800 btn">Task Manager</div>
        <div className="flex items-center space-x-4">
        <span className="tooltip tooltip-bottom" data-tip={user?.displayName}>
        <img
          referrerPolicy="no-reference"
            src={user?.photoURL}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover ring"
          />
        </span>
          <button
            onClick={signOutUser}
            className="btn bg-blue-600 text-white "
          >
            Sign Out
          </button>
        </div>
      </div>
    );
};

export default Navbar;