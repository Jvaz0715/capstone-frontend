import React, {
   useState,
   useEffect
} from 'react';
import axios from "axios";

// TODO: create api hit function that will automatically load data
// useState, useEffect
// you don't need props because the data is going to come from the api hit on useEffect

function AttractionDetail(props) {
   const [attractionDetails, setAttractionDetails] = useState({})
   const xid = props.match.params.xid;

   async function fetchAttractionDetails(xid) {
      try {
         const attractionDetails = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_APIKEY}`);
   
         setAttractionDetails(attractionDetails.data)
   
      } catch(e) {
         console.log(e)
      };
   };

   useEffect(()=>{
      fetchAttractionDetails(xid)
   }, []);


   console.log('attractionDetails')
   console.log(attractionDetails)

   return (
      <div>
         Hello! {attractionDetails.name}
      </div>
   )
};

export default AttractionDetail;
