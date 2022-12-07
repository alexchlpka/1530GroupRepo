import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import ListCondition from "./components/condition-list";
import ShowConditionID from "./components/show-condition-id";
import AddCondition from "./components/add-condition";
import DeleteCondition from "./components/delete-condition";
import UpdateCondition from "./components/update-condition";

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
          <Link to="/update/:id" className="nav-link">Update a Condition</Link>
          </li>
          <li className="nav-item">
          <Link to="/add" className="nav-link">Add a Condition</Link>
          </li>
          <li className="nav-item">
          <Link to="/conditions" className="nav-link">See Conditions</Link>
          </li>
          <li className="nav-item">
          <Link to="/delete/:id" className="nav-link">Delete a Condition</Link>
          </li>
          <li className="nav-item">
          <Link to="/conditions/:id" className="nav-link">Show a condition by ID</Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/conditions"
          render={(props) => (
            <ListCondition {...props} />
          )} />
        <Route exact path="/add" 
          render={(props) => (
            <AddCondition {...props} />
          )} />
        <Route exact path="/update/:id"
          render={(props) => (
            <UpdateCondition {...props} />
          )} />
        <Route path="/conditions/:id"
          render={(props) => (
            <ShowConditionID {...props} />
          )} />
        <Route path="/delete/:id"
          render={(props) => (
            <DeleteCondition {...props} />
          )} />
      </div>
    </div>
    
  );
}

export default App;
