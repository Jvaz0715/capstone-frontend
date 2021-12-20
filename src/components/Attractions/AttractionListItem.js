import * as React from 'react';

import { Link } from "react-router-dom";

import MuseumLogo from "../images/museum.png";
import BankLogo from "../images/bank.png";
import HistoricalLogo from "../images/coliseum.png";
import FoodLogo from "../images/restaurant.png";
import TheaterLogo from "../images/theater.png";
import TransportLogo from "../images/infrastructure.png";
import ShopLogo from "../images/shop.png";

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

   const returnLogo = (kinds) => {
      if (kinds.includes("theatres")) {
         return TheaterLogo;
      } else if(kinds.includes("museums")){
         return MuseumLogo;
      } else if(kinds.includes("historic")){
         return HistoricalLogo;
      } else if(kinds.includes("bank")){
         return BankLogo;
      } else if(kinds.includes("foods")){
         return FoodLogo;
      } else if(kinds.includes("shops")){
         return ShopLogo;
      } else if(kinds.includes("transport")){
         return TransportLogo;
      } else {
         return;
      }
   };

   

   if(name === "" || rate < 3) {
      return;
   };

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
                     <Typography variant="subtitle1" color="textSecondary" component="div">
                        {distInMiles} miles away | {rate}/7 Rated
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
                     src={returnLogo(kinds)}
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