import {
   useState,
   useContext
} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { 
   Box,
   InputLabel,
   MenuItem,
   FormControl,
   Select,
   styled,
   NativeSelect,
   InputBase,
   FormHelperText 
} from '@material-ui/core';


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
   const [searchedCity, setSearchedCity] = useState("");
   const [attractionType, setAttractionType] = useState("");
   const [distance, setDistance] = useState(0);

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
   }

   console.log(searchedCity)
   console.log(attractionType)
   console.log(distance)
   const {
      state: {user}
   } = useContext(AuthContext);
   
   return (
      <>
         <div>
            Welcome back {user.username}
         </div>
         
         <Box>
            {/* city search */}
            <FormControl sx={{ m: 1}} variant="standard">
               <InputLabel htmlFor="demo-customized-textbox">City</InputLabel>
               <BootstrapInput id="demo-customized-textbox" name="searchedCity" onChange={handleOnChange}/>
               <FormHelperText>Search City</FormHelperText>
            </FormControl>
            
            {/* attraction type */}
            <FormControl sx={{ m: 1}} variant="standard">
               <InputLabel id="demo-simple-select-label">Attraction</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-customized-select"
                  value={attractionType}
                  name="attractionType"
                  onChange={handleOnChange}
                  input={<BootstrapInput />}
               >
                  <MenuItem value="museums">Museums</MenuItem>
                  <MenuItem value="theaters">Theaters</MenuItem>
                  <MenuItem value="banks">Banks</MenuItem>
               </Select>
               <FormHelperText>Attraction</FormHelperText>
            </FormControl>
      
            {/* distance in miles */}
            <FormControl sx={{ m: 1}} variant="standard">
               <InputLabel id="demo-simple-select-label">Distance</InputLabel>
               <NativeSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={distance}
                  name="distance"
                  label="Distance"
                  onChange={handleOnChange}
                  input={<BootstrapInput />}
               >
                  <option aria-label="None" value="" />
                  <option value={1}>1 mi</option>
                  <option value={2}>2 mi</option>
                  <option value={3}>3 mi</option>
                  <option value={4}>4 mi</option>
                  <option value={5}>5 mi</option>
               </NativeSelect>
               <FormHelperText>Distance</FormHelperText>
            </FormControl>
         </Box>
      </>
   )
}

export default Attractions;


