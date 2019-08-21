import React from 'react';
import { Link } from 'react-router-dom';
import {Route, NavLink} from "react-router-dom";
import LoginForm from "../containers/LoginForm"
import SignupForm from "../containers/SignupForm"

export const AppHeader = () =>
	<div>
		<h3><NavLink to="/login">Log In</NavLink> Or <NavLink to="/signup">Sign Up</NavLink></h3>
            <div id="content">
              <Route path="/login"  component={LoginForm}/>
              <Route path="/signup" component={SignupForm}/>
            </div>
		<Link to='/'>
			<h1>Hoop It Up</h1>
		</Link>
	</div>

export default AppHeader;