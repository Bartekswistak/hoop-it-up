import React from 'react';
import { Link } from 'react-router-dom';

export const AppHeader = () =>
	<div>
		<Link to='/'>
			<h1>Hoop It Up</h1>
		</Link>
	</div>

export default AppHeader;