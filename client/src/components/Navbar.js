import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'

 const NavBar = ({currentUser}) => {

    return (
    
       <div className="NavBar">
       <h3 className="navlink">Welcome {currentUser.attributes.username}</h3>
            <NavLink exact className="active navlink" to="/playercard"> My PlayerCard </NavLink>
            {!!currentUser ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  
export default connect(mapStateToProps)(NavBar);