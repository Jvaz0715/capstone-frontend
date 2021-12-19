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
         const deletedFave = await Axios.delete(`/favorite-attractions/delete-attraction-from-favorites/${_id}`);

         fetchAllFavorites();
      } catch(e) {
         console.log(e)
      }
   }; 

   return (
      <div className="fave-attractions-container">
         <div className="fave-attractions-banner">
            <h1>Fave Attractions!</h1>
            <hr />
            <p>Below are attractions you have saved. Click on 'Learn More' to get more information on each attraction. Click 'Remove' if you no longer wish to keep the attraction in your favorites.</p>
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
