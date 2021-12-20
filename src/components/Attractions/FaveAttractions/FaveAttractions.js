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

   async function removeFromFavorites(_id) {
      try {
         await Axios.delete(`/favorite-attractions/delete-attraction-from-favorites/${_id}`);

         fetchAllFavorites();
      } catch(e) {
         console.log(e)
      }
   }; 

   return (
      <div className="fave-attractions-container">
         <div className="fave-attractions-banner">
            <hr />
            <h1>Your Favorite Attractions</h1>
            <hr />
         </div>
         
         {
            favorites.map((fave) => {
               return (
                  FaveAttractionCard({fave, removeFromFavorites})
               )
            })
         }
      </div>
   )
}

export default FaveAttractions;
