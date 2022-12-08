import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./home";
import ListCondition from "./condition-list";
import DevOperations from "./dev-operations";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home" className='navbar-brand'>Skin Condition</a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/conditions/devOps/" className="nav-link">Dev Ops</Link>
          </li>
          <li className="nav-item">
          <Link to="/conditions" className="nav-link">See Conditions</Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/conditions"
          render={(props) => (
            <ListCondition {...props} />
          )} />
        <Route exact path="/conditions/devOps" 
          render={(props) => (
            <DevOperations {...props} />
          )} />
      </div>
    </div>
    
  );
}

export default App;
