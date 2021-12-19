import * as React from 'react';

import {
   Link
} from "react-router-dom";

import {
   Box,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography
} from "@material-ui/core";

import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

const FaveAttractionCard = (props) => {
   
   const {
      attractionName,
      city,
      states,
      image,
      _id,
      xid,
   } = props.fave;

   return (
      <Box key={_id} sx={{ width: 400, marginBottom: 10 }}>
         <Card sx={{ maxWidth: 345, minWidth: 100, }}>
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
            </CardContent>
            
            <CardActions style={{display: "flex",justifyContent: "right"}}>
               <Box>
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

               <Box>
                  <Button variant="outlined" onClick={() => props.removeFromFavorites(_id)}>
                     <DeleteOutlineSharpIcon />
                  </Button>
               </Box>
            </CardActions>
         </Card>
      </Box>
   );
};

export default FaveAttractionCard;