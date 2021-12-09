import * as React from 'react';
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography
} from "@material-ui/core"



function AttractionSearchItem(props) {
   console.log(props)
   const {
      name, 
      dist, 
      rate
   } = props;
   
   return (
      <Box sx={{ display: 'flex', flexDirection: "column", width: 300, marginBottom: 5 }}>
         <Card sx={{ display: 'flex', flexDirection: "row"}}>
         <Box sx={{ display: 'flex', flexDirection: "column" }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  {name}
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" component="div">
                  {dist} meters away
               </Typography>
            </CardContent>
            <Box>
               {/* put buttons */}
               <button>Learn more</button>
            </Box>
         </Box>
         <CardContent>
            <img 
               src="https://cdn-icons.flaticon.com/png/128/1862/premium/1862600.png?token=exp=1639080949~hmac=d6f5604cd09b073bce7d557ab332b01d"
               alt="Theater"
               width="25px"
               height="25px"
            />
         </CardContent>
      </Card>
      </Box>
   );
};

export default AttractionSearchItem;