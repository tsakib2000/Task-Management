/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

     
            
            const {pathname}=useLocation();
            if(loading) return 'loading'
            if(user) return children
            return <Navigate state={pathname} to='/login'/>
    
 
};

export default PrivateRoute;