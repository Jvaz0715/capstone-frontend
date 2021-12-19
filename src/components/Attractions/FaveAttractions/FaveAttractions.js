import React, {
   useState,
   useEffect
} from 'react';
import Axios from '../../hooks/Axios';

function FaveAttractions() {
   const [favorites, setFavorites] = useState([]);

   const fetchAllFavorites = async () => {
      try {
         const allFavorites = await Axios.get("/favorite-attractions/get-all-fave-attractions");

         setFavorites([...allFavorites.data]);
         
      } catch(e) {
         console.log(e)
      }
   };

   useEffect(() => {
      fetchAllFavorites();
   }, []);

   console.log(favorites)
   /*
      xid,
      attractionName,
      city,
      states,
      country,
      image,
      attractionInfo,
      externalURL,
      wikiPageURL
   */ 
   return (
      <div>
         Fave Attractions!
         {
            favorites.map((fave) => {
               return (
                  <div>{fave.attractionName}</div>
               )
            })
         }
      </div>
   )
}

export default FaveAttractions;
