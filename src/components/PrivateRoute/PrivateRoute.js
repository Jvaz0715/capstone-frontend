import React, {useContext} from "react";
import {
   Route,
   Redirect
} from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import CheckAuthToken from "../hooks/CheckAuthToken";

function PrivateRoute({ component: Component, ...rest}) {
   const { state: user } = useContext(AuthContext);
   console.log(user)
   const { checkIfTokenExists } = CheckAuthToken();

   return(
      <Route 
         {...rest}
         render={(routerProps)=>(
            checkIfTokenExists()
               ?<Component {...routerProps} />
               : <Redirect to="/login" />
         )}
      />
   )
}

export default PrivateRoute;