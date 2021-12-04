import {
   useState,
   useEffect,
   useContext,
} from 'react';
import axios from "axios";

import { AuthContext } from '../../context/AuthContext';

// if login use login as url or sign up
function useFetchAPI(url) {
   const baseURL = process.env.NODE_ENV === "development"
   ? "http://localhost:3001/api"
   : "DEPLOYED CLOUD ADDRESS";

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
      console.log("user Info")
      console.log(userInfo)
      setIsLoading(true);
   };

   async function handleAPIFetchCall() {
      const userObj = {
         ...userInfo
      };

      try {
         let response = await axios(baseURL + url, userObj);
         // look at backedn for message user created
         if (response.data.message === "Success! User created" || response.data.message === "Success! Logged in") {
            setResponse(response.data.message);
            handleMessageOpen();
            setIsLoading(false);
            setSuccessMessageValue(response.data.message);
         } else {
            setIsLoading(false);

            dispatch({
               type: "LOGIN",
               user: {
                  email: response.data.user.email,
                  username: response.data.username
               }
            })
         }
      } catch(e) {
         setError(e.response.data.message);
         setIsLoading(false);
         handleMessageOpen();
      };
   };

   useEffect(() => {
      if (!isLoading) {
         return;
      }

      handleAPIFetchCall();
   }, [isLoading, url, userInfo, baseURL]);

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