import React from 'react';
import {
   Button,
} from "@material-ui/core";
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';
import "./Home.css";
// want to split the screen with image that will resize and small sign up details

import travelPhoto from "../images/clipart66213.png";

function Home() {
   return (
      <div className='home-container'>

         <div className="left-container">
            <img className="travel-img" src={travelPhoto} alt="travel logo" />
         </div>

         <div className='right-container'>
            <div className="home-info">
               <h3>Find the best attractions</h3>
               <h1 className='home-nearby'>Nearby <span><MapIcon fontSize='60px'/></span></h1>
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
               <div className="home-button-container">
                  <Button 
                     className="home-button" variant="contained"
                  >
                     <Link
                        to="/login"
                        style={{color: "#1978a5", textDecoration:"none"}}
                     >
                        Login
                     </Link>
                  </Button>

                  <Button 
                     className="home-button" variant="contained"
                  >
                     <Link
                        to="/sign-up"
                        style={{color: "#1978a5", textDecoration:"none"}}
                     >
                        Sign Up
                     </Link>
                  </Button>
                  
               </div>

            </div>
         </div>
      </div>
   )
}

export default Home;
