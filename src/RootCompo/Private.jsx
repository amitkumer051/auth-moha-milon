/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const { user ,loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Private;