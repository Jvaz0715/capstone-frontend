import jwtDecode from "jwt-decode";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// refer to token get
function CheckAuthToken() {

   const { dispatch } = useContext(AuthContext);

   function checkIfJwtTokenExists() {
      const jwtToken = "";
   }

};

export default CheckAuthToken;