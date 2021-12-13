import {
   useState,
   useEffect,
   useContext,
} from 'react';
import axios from "axios";
// import jwtDecode from 'jwt-decode';
import Axios from './Axios';

import { AuthContext } from '../../context/AuthContext';

// if login use login as url or sign up
function useFetchAPI(url) {
   // const baseURL = process.env.NODE_ENV === "development"
   // ? "http://localhost:3001/api"
   // : "/api/";

   const [isLoading, setIsLoading] = useState(false);
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);
   const [userInfo, setUserInfo] = useState({});

   const [isMessageOpen, setIsMessageOpen] = useState(false);
   const [successMessageValue, setSuccessMessageValue] = useState(null);

   const { dispatch } = useContext(AuthContext);

   function handleMessageOpen() {
      setIsMessageOpen(true);
   };

   function handleMessageClose() {
      setError(null);
      setResponse(null);
      setIsMessageOpen(false);
      setSuccessMessageValue(null);
   };

   function handleAPICallButtonSubmit(userInfo = {}) {
      setUserInfo(userInfo);
      setIsLoading(true);
   };

   async function handleAPIFetchCall() {
      const userObj = {
         ...userInfo
      };
      
      try {
         let response = await Axios.post(url, userObj);
         // look at backend for message user created
         



         if (response.data.message === "Success! User created") {
            setResponse(response.data.message);
            handleMessageOpen();
            setIsLoading(false);
            setSuccessMessageValue(response.data.message);
         } else {
            console.log(response.data.message)
            setIsLoading(false);
            let jwtToken = response.data.payload;
            localStorage.setItem("jwtToken", jwtToken);
            
            dispatch({
               type: "LOGIN",
               user: {
                  email: response.data.user.email,
                  username: response.data.user.username
               }
            })
         }
      } catch(e) {
         // setError(e.response.data.message);
         setIsLoading(false);
         handleMessageOpen();
      };
   };

   useEffect(() => {
      if (!isLoading) {
         return;
      }

      handleAPIFetchCall();
   }, [isLoading, url, userInfo,]);

   return [
      {
         isLoading,
         response,
         error,
         setError,
         setResponse,
      },
      successMessageValue,
      isMessageOpen,
      handleAPICallButtonSubmit,
      handleMessageOpen,
      handleMessageClose,
   ];
};

export default useFetchAPI;