import jwtDecode from "jwt-decode";
import { useContext } from "react";

import setAxiosAuthToken from "./setAxiosAuthToken";
import { AuthContext } from "../../context/AuthContext";
import {ACTIONS} from "../../context/ACTIONS";

// refer to token get
function CheckAuthToken() {

   const { dispatch } = useContext(AuthContext);

   function checkIfJwtTokenExists() {
      const jwtTokenFound = window.localStorage.getItem("jwtToken");

      if(jwtTokenFound) {
         return true;
      } else {
         return null;
      }
   };

   function logUserIn() {
      let checkAuthTokenExists = checkIfJwtTokenExists();

      if(checkAuthTokenExists) {
         const jwtToken = window.localStorage.getItem("jwtToken");

         const currentTime = Date.now() / 1000;
         let decodedToken = jwtDecode(jwtToken);

         if(decodedToken.exp < currentTime) {
            setAxiosAuthToken(null);
            
         } else {
            setAxiosAuthToken(jwtToken);
         };

         dispatch({
            type: ACTIONS.LOGIN,
            user: {
               email: decodedToken.email,
               username: decodedToken.username,
            },
         });
      }
   };

   function logUserOut() {

   }

   return {
      checkIfJwtTokenExists,
      logUserIn,
      logUserOut
   }

};

export default CheckAuthToken;