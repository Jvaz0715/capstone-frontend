import jwtDecode from "jwt-decode";

import setAxiosAuthToken from "./setAxiosAuthToken";

function checkIfUserIsAuth() {
   let jwtToken = localStorage.getItem("jwtToken");

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

export default checkIfUserIsAuth;