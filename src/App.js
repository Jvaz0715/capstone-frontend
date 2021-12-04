import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRouter from "./MainRouter";
import Spinner from "./Spinner/Spinner";
import AuthContextWrapper from "./context/AuthContext";

import './App.css';

function App(){
  return(
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <AuthContextWrapper>
          <MainRouter />
        </AuthContextWrapper>
      </Router>
    </React.Suspense>
  )
};

export default App;