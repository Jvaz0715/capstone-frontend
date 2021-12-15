import axios from 'axios';
import {
   useState,
   useEffect,
   useContext
} from 'react';
import { 
   Box,
   Button,
   InputLabel,
   MenuItem,
   FormControl,
   Select,
   styled,
   NativeSelect,
   InputBase,
   FormHelperText 
} from '@material-ui/core';

import { AuthContext } from '../../context/AuthContext';
import AttractionSearchItem from './AttractionListItem';

import "./Attractions.css";

// styling
const BootstrapInput = styled(InputBase)(({ theme }) => ({
   'label + &': {
      marginTop: theme.spacing(3),
   },
   '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
     // Use the system font instead of the default Roboto font.
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
         borderRadius: 4,
         borderColor: '#80bdff',
         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
   },
}));

function Attractions() {
   const {
      state: {user}
   } = useContext(AuthContext);

   const [searchedCity, setSearchedCity] = useState("");
   const [attractionType, setAttractionType] = useState("");
   const [distance, setDistance] = useState(0);

   const [validAttractions, setValidAttractions] = useState([]);
   const previousSearchObj = JSON.parse(window.sessionStorage.getItem("prevSearchedData"));

   useEffect(()=> {
      if(previousSearchObj) {
         fetchPrevious();
      }
      
   }, [searchedCity])

   const handleOnChange = (e) => {
      if (e.target.name === "searchedCity"){
         setSearchedCity(e.target.value);
      } else if (e.target.name === "attractionType"){
         setAttractionType(e.target.value);
      } else if (e.target.name === "distance"){
         setDistance(e.target.value);
      } else {
         return;
      }
   };

   const fetchPrevious = async () => {
      try {
         const {
            cityCoordinates, 
            attractionType, 
            distance
         } = previousSearchObj;
         
         const attractions = await searchAttractions(cityCoordinates, attractionType, distance);
         setValidAttractions(attractions);

      } catch (e) {
         console.log(e)
      };
   };

   const searchCity = async(cityName) => {
      try{
         let cityData = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${cityName}&apikey=${process.env.REACT_APP_MAP_APIKEY}`);

         return {
            lat: cityData.data.lat,
            lon: cityData.data.lon,
         }
      
      } catch(e) {
         console.log(e)
      }
   };

   const searchAttractions = async (coordinates,  attractionType, distance) => {
      try {
         let attractions = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=${distance}&lon=${coordinates.lon}&lat=${coordinates.lat}&kinds=${attractionType}&apikey=${process.env.REACT_APP_MAP_APIKEY}`);

         let AttractionsArray = [...attractions.data.features];
         
         return AttractionsArray;

      } catch(e) {
         console.log(e)
      }
   };

   const handleOnSubmit = async () => {
      try {
            const cityCoordinates = await searchCity(searchedCity);
            const attractions = await searchAttractions(cityCoordinates, attractionType, distance);

            window.sessionStorage.setItem("prevSearchedData", JSON.stringify({
               cityCoordinates: {
                  lat: cityCoordinates.lat, 
                  lon: cityCoordinates.lon,
               },
               attractionType,
               distance
            }));

            setValidAttractions(attractions);
      } catch(e) {
         console.log(e);
      }
   };
   
   return (
      <div className='attractions-page-container'>
         <div>
            Welcome back {user.username}
         </div>
         
         {/* Search Box Container */}
         <div className="search-box-container">
            <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
               {/* city search */}
               <FormControl sx={{ m: 1}} variant="standard">
               <InputLabel htmlFor="demo-customized-textbox">City</InputLabel>
               <BootstrapInput id="demo-customized-textbox" name="searchedCity" onChange={handleOnChange}/>
               <FormHelperText>Search City</FormHelperText>
               </FormControl>
            
               {/* attraction type */}
               <FormControl   variant="standard">
               <InputLabel id="demo-simple-select-label" >Attraction</InputLabel>
               <Select
                  labelid="demo-simple-select-label"
                  id="demo-customized-select"
                  value={attractionType}
                  name="attractionType"
                  onChange={handleOnChange}
                  input={<BootstrapInput />}
               >
                  <MenuItem value="museums">Museums</MenuItem>
                  <MenuItem value="theatres_and_entertainments">Theaters</MenuItem>
                  <MenuItem value="historic">Historical</MenuItem>
                  <MenuItem value="foods">Food</MenuItem>
                  <MenuItem value="shops">Shops</MenuItem>
                  <MenuItem value="transport">Transportation</MenuItem>
                  <MenuItem value="banks">Banks</MenuItem>
               </Select>
               <FormHelperText>Attraction</FormHelperText>
               </FormControl>
      
               {/* distance in miles */}
               <FormControl sx={{ m: 3}} variant="standard">
               <InputLabel id="demo-simple-select-label">Distance</InputLabel>
               <NativeSelect
                  labelid="demo-simple-select-label"
                  id="demo-simple-select"
                  value={distance}
                  name="distance"
                  label="Distance"
                  onChange={handleOnChange}
                  input={<BootstrapInput />}
               >
                  <option aria-label="None" value="" />
                  <option value={1610}>1 mi</option>
                  <option value={3219}>2 mi</option>
                  <option value={4828}>3 mi</option>
                  <option value={6437}>4 mi</option>
                  <option value={8047}>5 mi</option>
               </NativeSelect>
               <FormHelperText>Distance</FormHelperText>
               </FormControl>

               <Button 
                  sx={{ m: 1}} 
                  variant="contained" 
                  onClick={handleOnSubmit} 
                  disabled={
                     searchedCity.length === 0 
                     || attractionType.length === 0 
                     || distance === 0 ? true : false
                  }
               >Search</Button>
            </Box>
         </div>

         {/* Search Results Container */}
         <div className="search-results-container">
            <ul className="search-results-ul">
            {
               validAttractions.map((attraction) => {
                  return (
                     <li className="search-results-li" key={attraction.id}>
                        {AttractionSearchItem(attraction.properties)}
                     </li>
                  )                  
               })
            }
            </ul>
         </div>


      </div>
   )
}

export default Attractions;


