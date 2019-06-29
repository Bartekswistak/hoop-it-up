import React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import LoginContainer from "./containers/LoginContainer"
import Signup from "./components/Signup";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Hoop It Up!
        </h1>
          <h3><NavLink to="/login">Log In</NavLink> Or <NavLink to="/signup">Sign Up</NavLink></h3>
            <div id="content">
              <Route path="/login" render={()=> <LoginContainer user={this.props.user} />} component={Login}/>
              <Route path="/signup" component={Signup}/>
            </div>
      </header>
    </div>
    </HashRouter>
  );
}

export default App;
