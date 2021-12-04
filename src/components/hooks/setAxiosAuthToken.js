import Axios from "./useFetchAPI";

function setAxiosAuthToken(jwtToken) {
   if (jwtToken) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
   } else {
      delete Axios.defaults.headers.common["Authorization"];
   }
};

export default setAxiosAuthToken;