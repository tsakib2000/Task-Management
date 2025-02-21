import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../Pages/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoute><Home/></PrivateRoute>
    },
    {
        path:'/login',
        element:<Login/>
    }
])

export default router