import React, {
   useState,
   useEffect
} from 'react';
import axios from "axios";
import {
   Box,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography
} from "@material-ui/core";


function AttractionDetail(props) {
   const [attractionName, setAttractionName] = useState("");
   const [image, setImage] = useState("default image");
   const [attractionInfo, setAttractionInfo] = useState("default info");
   const [city, setCity] = useState("");
   const [states, setStates] = useState("");
   const [country, setCountry] = useState("");
   const [externalURL, setExternalURL] = useState("default externalURL");
   const [wikiPage, setWikiPage] = useState("wikipage");

   const xid = props.match.params.xid;
   // if country is USA, just give state, otherwise use country
   const useStateOrCountry = country === "United States of America" ? states : country;

   async function fetchAttractionDetails(xid) {
      try {
         const attractionDetails = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_APIKEY}`);
         
         // standard data all objects have
         setAttractionName(attractionDetails.data.name);
         setCity(attractionDetails.data.address.city);
         setStates(attractionDetails.data.address.state);
         setCountry(attractionDetails.data.address.country);

         // dynamic data that not all objects have
         attractionDetails.data.preview.source && setImage(attractionDetails.data.preview.source);
         attractionDetails.data.wikipedia_extracts.text && setAttractionInfo(attractionDetails.data.wikipedia_extracts.text);
         attractionDetails.data.url && setExternalURL(attractionDetails.data.url);
         attractionDetails.data.wikipedia && setWikiPage(attractionDetails.data.wikipedia);

      } catch(e) {
         console.log(e)
      };
   };

   useEffect(()=>{
      fetchAttractionDetails(xid)
   }, []);

   return (
      <>
         <Card sx={{ maxWidth: 345}}>
            <CardMedia
               component="img"
               height="140"
               image={image}
               alt={attractionName}
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {attractionName}
               </Typography>
               <Typography>
                  {city}, {useStateOrCountry}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {attractionInfo}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small" variant="outlined">Share</Button>
               <Button size="small" variant="outlined">Learn More</Button>
               <Button size="small" variant="outlined">Wiki</Button>
            </CardActions>
         </Card>
      </>
   )
};

export default AttractionDetail;
