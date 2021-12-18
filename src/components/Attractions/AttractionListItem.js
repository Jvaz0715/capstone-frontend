import * as React from 'react';

import { Link } from "react-router-dom";

import MuseumLogo from "../images/museum.png";

import {
   Box,
   Card,
   CardContent,
   Typography,
   Button
} from "@material-ui/core"



function AttractionSearchItem(props) {
   const {
      xid,
      name, 
      dist, 
      rate,
      kinds,
   } = props;

   console.log("props")
   console.log(props.kinds)

   if(name === "") {
      return;
   }

   function convertedToMiles(dist) {
      const miles = dist / 1609.34;

      return miles.toFixed(2);
   };

   const distInMiles = convertedToMiles(dist);
   
   return (
      <Box sx={{ width: 400, marginBottom: 10 }}>
         <Card sx={{ display: 'flex',}}>
            <Box sx={{ display: 'flex', flexDirection: "row"}}>
               <Box sx={{ display: 'flex', flexDirection: "column", width: "75%" }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                     <Typography component="div" variant="h5">
                        {name}
                     </Typography>
                     <Typography variant="subtitle1" color="text.secondary" component="div">
                        {distInMiles} miles away
                     </Typography>
                     <Typography variant="subtitle1" color="text.secondary" component="div">
                        {rate}/5 rating
                     </Typography>
                  </CardContent>

                  {/* put buttons */}
                  <Box style={{marginLeft: "10px", marginBottom: "10px"}}>
                     <Link
                        to={{
                           pathname: `/attraction-detail/${xid}`,
                           search: `?t=${xid}`
                        }}
                        style={{textDecoration: "none", marginBottom: "5px"}}
                     >
                        <Button variant="outlined">Learn more</Button>
                     </Link>
                  </Box>

               </Box>
               
               <CardContent sx={{border: "2px solid blue"}}>
                  <img 
                     src={MuseumLogo}
                     alt="Theater"
                     width="70px"
                     height="70px"
                  />
                  
               </CardContent>

            </Box>
         </Card>
      </Box>
   );
};

export default AttractionSearchItem;