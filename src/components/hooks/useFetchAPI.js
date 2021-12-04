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

   const [isLoading, setisLoading] = useState(false);
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);
   const [options, setOptions] = useState({});
}

export default useFetchAPI;