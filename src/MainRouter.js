import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Switch
} from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home.js"));
const Auth = React.lazy(() => import("./components/Auth/Auth"));
// import other componenets

function MainRouter(props) {
   return (
      <Router>
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
               component={Auth}
            />


         </Switch>
      </Router>
   )
}

export default MainRouter;