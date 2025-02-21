import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="text-xl font-bold text-gray-800">Task Manager</div>
      <div className="flex items-center space-x-4">
        <img
        referrerPolicy="no-reference"
          src={user.photoURL}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <button
        //   onClick={handleSignOut}
          className="text-blue-500 hover:text-blue-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
