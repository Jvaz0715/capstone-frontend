import React, {
   useState,
   useEffect
} from 'react';
import axios from "axios";

function AttractionDetail(props) {
   const [attractionName, setAttractionName] = useState("");
   const [image, setImage] = useState("default image");
   const [attractionInfo, setAttractionInfo] = useState("default info");
   const [externalURL, setExternalURL] = useState("");
   const [wikiPage, setWikiPage] = useState("");

   const xid = props.match.params.xid;

   // TODO: create mui card that will display the following information
   /* 
      name = attractionDetails.name
      image = attractionDetails.preview.source 
      information = attractionDetails.wikipedia_extracts.text
      externalURL = attractionDetails.url
      wikipediaPage = attractionDetails.wikipedia
   */

   async function fetchAttractionDetails(xid) {
      try {
         const attractionDetails = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_APIKEY}`);
         console.log(attractionDetails.data)
         setAttractionName(attractionDetails.data.name);
         attractionDetails.data.preview.source && setImage(attractionDetails.data.preview.source);
         attractionDetails.data.wikipedia_extracts.text && setAttractionInfo(attractionDetails.data.wikipedia_extracts.text);

      } catch(e) {
         console.log(e)
      };
   };

   useEffect(()=>{
      fetchAttractionDetails(xid)
   }, []);

   return (
      <div style={{display: "flex", flexDirection: "column"}}>
         <span>Name: {attractionName}</span>
         <span>Image: {image}</span>
         <span>Info: {attractionInfo}</span>
         {/* <span>ExternalURL: {attractionDetails.url && attractionDetails.url}</span> */}
         {/* <span>Wikipedia Page: {attractionDetails.wikipedia && attractionDetails.wikipedia}</span> */}
      </div>
   )
};

export default AttractionDetail;
