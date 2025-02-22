import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="bg-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
        TaskMaster
        </NavLink>

     
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
          Home
          </NavLink>
          <NavLink
            to="/addTask"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Add Task
          </NavLink>
          <NavLink
            to="/Tasks"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Tasks
          </NavLink>

          {/* User Profile & Logout */}
         
            <div className="flex items-center space-x-3">
              <span className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                />
              </span>
              <button
                onClick={signOutUser}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Out
              </button>
            </div>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
       <FaBars />
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 bg-white  mt-2 py-4 px-6">
                 <NavLink
            to="/"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Home
          </NavLink>
          <NavLink
            to="/addTask"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Add Task
          </NavLink>
          <NavLink
            to="/Tasks"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Tasks
          </NavLink>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-3">
            <img
              src={user?.photoURL}
              referrerPolicy="no-reference"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-500"
            />
            <button className="btn bg-blue-600 text-white px-4 py-2  hover:bg-blue-700 w-full">
              Sign Out
            </button>
          </div>
        </div>
      )}
   
    </nav>
    );
};

export default Navbar;