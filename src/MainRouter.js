import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Switch
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
const Home = React.lazy(() => import("./components/Home/Home.js"));
const Auth = React.lazy(() => import("./components/Auth/Auth"));
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const Attractions = React.lazy(() => import("./components/Attractions/Attractions"));
const AttractionDetail = React.lazy(() => import("./components/Attractions/AttractionDetail"))
const FaveAttractions = React.lazy(() => import("./components/Attractions/FaveAttractions/FaveAttractions.js"));

function MainRouter(props) {
   return (
      <Router>
         <Navbar />
         <Switch>
            {/* homepage */}
            <Route 
               exact
               path="/"
               component={Home}
            />
            {/* signup */}
            <Route 
               exact
               path="/sign-up"
               component={Auth}
            />
            {/* login */}
            <Route 
               exact
               path="/login"
               // component={Auth}
               render={(routerProps) => <Auth {...routerProps} />}
            />

            {/* Attractions */}
            <PrivateRoute 
               exact
               path="/attractions"
               component={Attractions}
            />

            {/* Attraction Detail Page */}
            <PrivateRoute
               exact
               path="/attraction-detail/:xid"
               component={AttractionDetail}
            />

            {/* Profile Page */}
            <PrivateRoute
               exact
               path="/profile"
               component={Profile}
            />

            {/* Favorites component */}
            <PrivateRoute
               exact
               path="/fave-attractions"
               component={FaveAttractions}
            />

         </Switch>
      </Router>
   )
}

export default MainRouter;