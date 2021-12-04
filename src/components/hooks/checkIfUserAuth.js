import jwtDecode from "jwt-decode";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
import setAxiosAuthToken from "./setAxiosAuthToken";

//ref: auth-reducer-hooks-frontend-v2

function CheckAuthToken() {
   const{ dispatch } = useContext(AuthContext);

   // first we need to check if a token exists
   function checkIfTokenExists() {
      const jwtToken = localStorage.getItem("jwtToken");

      if(jwtToken){
         const currentTime = Date.now() / 1000;

         let decodedToken = jwtDecode(jwtToken);

         if(decodedToken.exp < currentTime) {
            setAxiosAuthToken(null);
            return false;
         } else {
            setAxiosAuthToken(jwtToken);
            return true;
         }
      } else {
         return false;
      };
   };

   function logUserIn() {
      let checkTokenExists = checkIfTokenExists();

      if(checkTokenExists) {
         const jwtToken = localStorage.getItem("jwtToken");
         const jwtDecodedToken = jwtDecode(jwtToken);
         console.log("jwtDecodedToken")
         console.log(jwtDecodedToken);

         dispatch({
            type:"LOGIN",
            user: {
               email: jwtDecodedToken.email,
               username: jwtDecodedToken.username
            }
         });
      };
   }
};

export default CheckAuthToken;


// function checkIfUserIsAuth() {
//    let jwtToken = localStorage.getItem("jwtToken");

//    if(jwtToken){
//       const currentTime = Date.now() / 1000;

//       let decodedToken = jwtDecode(jwtToken);

//       if(decodedToken.exp < currentTime) {
//          setAxiosAuthToken(null);
//          return false;
//       } else {
//          setAxiosAuthToken(jwtToken);
//          return true;
//       }
//    } else {
//       return false;
//    };
// };