// import {useLocation, Navigate, Outlet} from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const RequireAuth = () => {
//     const {auth} = useAuth();
//     const location = useLocation();
//     return(
//         auth?.accessToken ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace />
//     );
// }

import { Outlet, Navigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    const {auth} = useAuth();

    return(
        auth?.accessToken ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default RequireAuth;