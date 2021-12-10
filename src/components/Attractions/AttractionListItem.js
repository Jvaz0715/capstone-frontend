import * as React from 'react';
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography
} from "@material-ui/core"



function AttractionSearchItem(props) {

   const {
      name, 
      dist, 
      rate
   } = props;

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
                  <Box>
                     <button>Learn more</button>
                  </Box>

               </Box>
               
               <CardContent sx={{border: "2px solid blue"}}>
                  <img 
                     src="https://cdn-icons.flaticon.com/png/128/1862/premium/1862600.png?token=exp=1639080949~hmac=d6f5604cd09b073bce7d557ab332b01d"
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