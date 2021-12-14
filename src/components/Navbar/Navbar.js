import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapIcon from '@mui/icons-material/Map';
import {NavLink, Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import CheckAuthToken from '../hooks/CheckAuthToken';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));

function Navbar(props) {
   const classes = useStyles();
   const { logUserIn, logUserOut } = CheckAuthToken();

   useEffect(() => {
      logUserIn()
   }, [])

   const {
      state: { user },
   } = useContext(AuthContext);

   const isUserLoggedIn = user ? true : false;

   const navLinkTitleOne = isUserLoggedIn ? "/profile" : "/login";

   const navLinkDisplayOne = isUserLoggedIn ? <AccountCircleIcon/> : "login";

   const navLinkTitleTwo = isUserLoggedIn ? "/" : "/sign-up";

   const navLinkDisplayTwo = isUserLoggedIn ? "Logout" : "Sign Up";


   const navLinkDisplayThree = isUserLoggedIn ? "Search" : "";


   return (
      <div className={classes.root}>
         <AppBar position="static" style={{ background: '#1978a5' }}>
            <Toolbar>
               <Typography variant="h6" className={classes.title} style={{fontFamily: 'Merriweather, serif',}}>
                  <Link to="/" style={{color: "white", textDecoration:"none"}}>
                     Nearby <MapIcon/> 
                  </Link>
               </Typography>

               <NavLink activeStyle={{color: "red"}} exact to={navLinkTitleOne}>
                  <Button 
                  color="inherit" 
                  style={{color: "white"}}
                  >
                     {navLinkDisplayOne}
                  </Button>
               </NavLink>

               {isUserLoggedIn &&
                  <NavLink activeStyle={{color: "red"}} exact to="/attractions">
                     <Button color="inherit" style={{color: "white", backgroundColor: ""}}>
                        {navLinkDisplayThree}
                     </Button>
                  </NavLink>
               }

               <NavLink activeStyle={{color: "red"}} exact to={navLinkTitleTwo}>
                  <Button 
                  color="inherit" 
                  style={{color: "white"}}
                  onClick={()=> logUserOut()}
                  >
                     {navLinkDisplayTwo}
                  </Button>
               </NavLink>
            </Toolbar>
         </AppBar>
         
      </div>
   )
}

export default Navbar;
