import React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';
// import Login from "./components/Login";
import LoginForm from "./containers/LoginForm"
// import Signup from "./components/Signup";
import SignupForm from "./containers/SignupForm"

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
      <NavLink to="/">Home</NavLink>
        <h1>
          Welcome to Hoop It Up!
        </h1>
          <h3><NavLink to="/login">Log In</NavLink> Or <NavLink to="/signup">Sign Up</NavLink></h3>
            <div id="content">
              <Route path="/login"  component={LoginForm}/>
              <Route path="/signup" component={SignupForm}/>
            </div>
      </header>
    </div>
    </HashRouter>
  );
}

export default App;
