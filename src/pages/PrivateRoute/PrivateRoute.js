import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { css } from "@emotion/react";
// import FadeLoader from "react-spinners/FadeLoader";
import { getStoreInfo } from '../../store/storeUserInfo';

// const override = css`
//   display: block;
//   border-color: red;
//   margin: 40vh auto;
// `;


const PrivateRoute = ({ children, ...rest }) => {
    //     const authData = JSON.parse(localStorage.getItem('persist:root'));
    // const authData1 = JSON.parse(authData.authentication);
    // const token = authData1?.token
    // console.log("private",token )
    
    const userId = getStoreInfo()?._id
    
    // const { employee, isLoading } = useAuth();
    
    const history = useHistory();
    // let location = useLocation();

    // if (isLoading) {
    //     return <div className="text-center mt-3">
    //         <FadeLoader
    //             color={"#123abc"}
    //             // loading={isLoading}
    //             css={override}
    //             height={10}
    //             width={6}
    //             radius={2}
    //             margin={2}
    //         />
    //     </div>
    // }

    return userId ? children
        :
        // <Navigate to="/login" state={{ from: location }}   />
        history.push("/")
};

export default PrivateRoute;