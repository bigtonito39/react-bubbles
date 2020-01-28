import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./utils/ProtectedRoute";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-Links">
    <Link to="/">Home</Link>
    <Link to="/login" >Login</Link>
    <Link to="/protected">See bubbles</Link>
        </div>
    
     
     
        <Switch>
        <Route exact path="/"/>
        <ProtectedRoute exact path="/protected" component={BubblePage}/>
        <Route path="/login" component={Login} />
        
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
