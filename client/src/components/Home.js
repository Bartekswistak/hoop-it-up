import React from 'react'
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';

const Home = () => {

    return (
        <div>
          <Container className="home">
          <h3><NavLink to="/">Home</NavLink></h3>
            <h1>Welcome to Hoop it Up</h1>
            <p>Finding quality pickup games in your area since 2019</p> 
            <br/>
           </Container>
       </div>
    )
}


export default Home