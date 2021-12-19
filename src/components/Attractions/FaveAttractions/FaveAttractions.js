import React, {
   useState,
   useEffect
} from 'react';
import FaveAttractionCard from './FaveAttractionCard';
import Axios from '../../hooks/Axios';

import "./FaveAttractions.css"

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
      <div className="fave-attractions-container">
         Fave Attractions!
         {
            favorites.map((fave) => {
               return (
                  FaveAttractionCard(fave)
               )
            })
         }
      </div>
   )
}

export default FaveAttractions;
