import React, {
   useState,
   useEffect
} from 'react';
import axios from "axios";

// TODO: create api hit function that will automatically load data
// useState, useEffect
// you don't need props because the data is going to come from the api hit on useEffect

async function fetchAttractionDetails(xid) {
   try {
      const attractionDetails = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_APIKEY}`);

      console.log(attractionDetails)
   } catch(e) {
      console.log(e)
   };
};

function AttractionDetail(props) {
   const xid = props.match.params.xid;

   useEffect(()=>{
      fetchAttractionDetails(xid)
   }, [])
   return (
      <div>
         Hello!
      </div>
   )
};

export default AttractionDetail;
