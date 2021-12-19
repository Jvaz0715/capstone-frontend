import * as React from 'react';

import {
   Box,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography
} from "@material-ui/core";

const FaveAttractionCard = (props) => {
   
   const {
      attractionName,
      attractionInfo,
      city,
      states,
      image,
      _id
   } = props

   return (
      <Box key={_id} sx={{ width: 400, marginBottom: 10 }}>
      <Card sx={{ maxWidth: 345,
         minWidth: 100, }}>
         <CardMedia
            component="img"
            alt={attractionName}
            height="140"
            image={image}
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="primary">
               {attractionName}
            </Typography>
            <Typography color="textSecondary">
                  {`${city} | ${states}`}
            </Typography>
            <Typography variant="body2" color="inherit">
               {attractionInfo}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Learn More</Button>
            <Button size="small">Remove</Button>
         </CardActions>
      </Card>
      </Box>
   );
};

export default FaveAttractionCard;