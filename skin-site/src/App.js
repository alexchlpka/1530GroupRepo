import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ListCondition from "./components/condition-list";
import DevOperations from "./components/dev-operations";
import ShowCondition from "./components/show-condition";

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
        <Route exact path="/conditions"
          render={(props) => (
            <ListCondition {...props} />
          )} />
        <Route exact path="/conditions/id/*"
          render={(props) => (
            <ShowCondition {...props} />
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
