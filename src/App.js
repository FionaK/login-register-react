import React, { Component } from 'react';
import LoginForm from './pages/LoginForm.js';
import SignupForm from './pages/SignupForm.js';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-form">
      <div className="App">
       <div className="App-aside"></div>
      <div className="App-form">
      <div className="PageSwitcher">
      <NavLink to="/Login" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Login</NavLink>
      <NavLink exact to="/" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign Up</NavLink>
      </div>

      <div className="FormTitle">
      <NavLink to="/Login" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">Login</NavLink> or <NavLink exact to="/" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">Sign Up</NavLink>
      </div>
      <Route exact path="/" component={SignupForm}></Route>
      <Route path="/Login" component={LoginForm}> </Route>

      </div>
       </div>
      </Router>
    );
  }
}

export default App;
