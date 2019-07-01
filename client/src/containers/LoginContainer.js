import React from 'react';
import Login from "../components/Login";
import { withRouter } from 'react-router-dom';


class LoginContainer extends React.Component {
    constructor(props) {
      super(props)
  
      if (props.user) {
        alert("You can't login if you are logged in!")
        props.history.push('/')
      }
    }
  
    render() {
      return <Login />;
    }
  }
  
  export default withRouter(LoginContainer)