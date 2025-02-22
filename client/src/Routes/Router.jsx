import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../Pages/Login";
import AddTask from "../Pages/AddTask";

import Tasks from "../Pages/Tasks";
import UpdatePage from "../Pages/updatePage";

const router=createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoute><Home/></PrivateRoute>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><AddTask/></PrivateRoute>
            },
            {
                path:'Tasks',
                element:<PrivateRoute><Tasks/></PrivateRoute>
            },
            {
                
                    path:'task/:id',
                    element:<UpdatePage/>
                
            }
     
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
])

export default router