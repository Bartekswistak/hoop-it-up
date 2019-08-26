import React from 'react'
import {connect} from 'react-redux'

import Container from 'react-bootstrap/Container';

const PlayerCardContainer = ({currentUser}) => {

   
        return (
          <Container>
           <h1> This is my PlayerCard container </h1>
          </Container>
       )
  
}
const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(PlayerCardContainer);