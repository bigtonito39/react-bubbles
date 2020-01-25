import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
        <h1>Welcome to the Bubble App!</h1>
        </div>
      
    <Link to="/login" className="nav">Login To See Bubbles!</Link>
     
     
        <Switch>
        <ProtectedRoute exact path="/protected" component={BubblePage}/>
        <Route exact path="/login" component={Login} />

        </Switch>
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
