import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from 'react-router-dom';

//import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Auth = React.lazy(() => import ("./components/Auth/Auth"));
const Protected = React.lazy(() => import ("./components/Protected/Protected"));

function MainRouter(props) {
   return (
      <Router>
         {/* <Navbar /> */}
         <Switch>
            {/* <Route 
               exact
               path="/"
               component={Home}
            /> */}

            <Route 
               exact
               path="/sign-up"
               component={Auth}
            />

            <Route 
               exact
               path="/login"
               component={Auth}
            />

            {/* Turn into PrivateRoute once it is set up*/}
            <Route
               exact
               path="/protected"
               component={Protected}
            />

            {/* <Route 
               path="*"
               exact 
               component={NotFound}
            /> */}

         </Switch>
      </Router>
   )
};

export default MainRouter;