import {  NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {

  return (
<div className="w-11/12 mx-auto mt-5">
    <Navbar/>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    <NavLink to='/'>
  <div className="bg-white rounded-lg shadow p-4 cursor-pointer">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Task</h2>
  
  </div>
  </NavLink>

  <NavLink to='/Tasks'>
  <div className="bg-white rounded-lg shadow p-4 cursor-pointer">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Tasks</h2>

   
  </div>
</NavLink>
</div>
<Outlet/>
</div>
  );
};

export default Home;
