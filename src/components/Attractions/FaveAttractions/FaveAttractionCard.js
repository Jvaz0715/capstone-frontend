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
   console.log("props")
   console.log(props)

   const {
      attractionName,
      city,
      states,
      country,
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
            <Typography gutterBottom variant="h5" component="div">
               {attractionName}
            </Typography>
            <Typography>
                  {`${city} | ${states}`}
               </Typography>
            <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
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