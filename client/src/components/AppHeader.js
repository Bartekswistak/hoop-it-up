import React from 'react';
import { Link } from 'react-router-dom';
import {Route, NavLink} from "react-router-dom";
import Login from "../components/Login"
import Signup from "../components/Signup"

export const AppHeader = () =>
	<div id="navbar">
	<Link to='/'>
			<h1 id="title">Hoop It Up</h1>
		</Link>
		<h3><NavLink to="/login">Log In</NavLink> Or <NavLink to="/signup">Sign Up</NavLink></h3>
        <div id="content">
          <Route path="/login"  component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
	</div>

export default AppHeader;