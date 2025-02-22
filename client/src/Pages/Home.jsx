import {  NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {

  return (
<div className="w-11/12 mx-auto mt-5">
    <Navbar/>

    <div className="space-x-1">
    <NavLink to='/'>
  <div className="btn cursor-pointer">
    <h2 className="text-lg font-semibold text-gray-800">Add Task</h2>
  
  </div>
  </NavLink>

  <NavLink to='/Tasks'>
  <div className="btn cursor-pointer">
    <h2 className="text-lg font-semibold text-gray-800">Tasks</h2>
  
  </div>
  </NavLink>
</div>
<Outlet/>
</div>
  );
};

export default Home;
