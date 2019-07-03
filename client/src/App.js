import React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';
// import Login from "./components/Login";
import LoginForm from "./containers/LoginForm"
// import Signup from "./components/Signup";
import SignupForm from "./containers/SignupForm"
import AppHeader from "./components/AppHeader"

// componentDidMount(){
//   $.ajax({ 
//     type: "GET",
//     url: 'https://localhost:3001/users'
//   }).done(data =>{
//     console.log(data)
//   });
// }

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
      <AppHeader />
        <h2>
          Finding quality pickup games in your area since 2019
        </h2>
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
